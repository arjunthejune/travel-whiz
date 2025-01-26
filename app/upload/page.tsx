import Link from "next/link";
import Sidebar from "../components/Sidebar";


async function file(formData: FormData) {
  "use server";
  const file = formData.get("file") as File;
  console.log("File name:", file.name, "size:", file.size);
}


function Form() {
  return (
    <input type="file" id="upload-attachment" accept="image/*"/>
  );
}

export default async function Home() {

  return (

    
    <main>
      <Sidebar />

      <div className="right-sidebar">
        <h1 className="upload-title"> Upload Your File Here</h1>
        <Form />
      </div>
    
    </main>


  );
}

