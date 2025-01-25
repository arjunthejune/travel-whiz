import Link from "next/link";


export default function Home() {


  return (
    <main>
      <div className= "top-home-page">
        <h1 className= "top-title">Travel Whiz</h1>
        <p className="top-description">
          Traveling one restaurant at a time
        </p>
        <Link href="/secondpage">
            <button type="button" className="button1"> Enter Image </button>
        </Link>

      </div>
      <div className="bottom-home-page">
        <p className="bottom-description">
          This is a test description of our Travel Whiz Website
        </p>
      </div>
    </main>
  )
}



