from flask import Flask, request, jsonify
from groq import Groq
from dotenv import load_dotenv
import os
import googlemaps

# Load environment variables
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")
maps_api_key = os.getenv("GOOGLE_API_KEY")
print(f"Loaded API Key: {maps_api_key}")  # For debugging, ensure the key is loaded correctly

client = Groq(api_key=api_key)
app = Flask(__name__)

@app.route('/analyze-image', methods=['POST'])
def analyze_image():
    data = request.json
    if not data or 'image' not in data:
        return jsonify({"error": "No image data provided"}), 400
    
    base64_image = data['image']
    
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "What's in this image?"},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/jpeg;base64,{base64_image}",
                            },
                        },
                    ],
                }
            ],
            model="llama-3.2-11b-vision-preview",
        )
        
        response = chat_completion.choices[0].message.content
        return jsonify({"response": response})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)


