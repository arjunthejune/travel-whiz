import Link from "next/link";
import Image from "next/image";

export default function Home() {


  return (
    <main>
      <div className= "top-home-page">
        <h1 className= "top-title">Travel Whiz</h1>
        <p className="top-description">
          Traveling one restaurant at a time
        </p>
        <img className="front-image" src="/assets/restaurant.jpg" alt="Picture of the author"/>
        <Link href="/map">
            <button type="button" className="button1" id="enter-app">

            </button>
        </Link>

      </div>
      <div className="bottom-home-page">
        <p className="bottom-description">
          Discover more with our AI-powered app! 
          
          Whether you're exploring a new city or looking for hidden gems in your area, this app transforms your photos into personalized recommendations.

          Snap & Discover: Take a photo of a restaurant menu, landmark, or storefront, and instantly get nearby suggestions for similar places to explore.
          Smart Exploration: The app uses cutting-edge AI to identify what’s in the photo and find locations that match your preferences, from restaurants with similar menus to landmarks with comparable history or vibes.
          Seamless Navigation: Integrated with maps and reviews, the app makes it easy to find your next adventure or dining spot with confidence.
          Perfect for travelers, foodies, or anyone curious about the world around them—just snap a pic and let the app guide you to your next favorite spot!
        </p>
      </div>
    </main>
  )
}



