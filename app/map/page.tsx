import Link from "next/link";
import GoogleMapComponent from '../components/GoogleMapComponent';
import Sidebar from "../components/Sidebar";
import CurrentLocation from "../components/CurrentLocation";

async function file(formData: FormData) {
  "use server";
  const file = formData.get("file") as File;
  console.log("File name:", file.name, "size:", file.size);
}





export default async function Home() {
  return (
    <main>
      <Sidebar />
      <div className="right-sidebar">
        <GoogleMapComponent />
        
      </div>
    </main>

  );
}


function Form() {

  return (
    <form className="file-form" action={file}>
      <label htmlFor="file">Photo</label>
      <input type="file" name="file" id="file"/>
      <button type="submit" id="upload">
        Upload file
      </button>
    </form>
  );
}



