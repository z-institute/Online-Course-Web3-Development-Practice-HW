import Message from "../pages/Message";
import Announcement from "../pages/Announcement";

export default function Body(props: any) {
  // console.log(props);

  return(
    <>
    { !props.rightConnect ? 
      (
        <main>
          <div className="w-full h-full fixed bg-[#777] bg-opacity-80 flex z-[30]">
            <div className="w-24 h-24 mt-60 mx-auto border-b-8 border-red-300 rounded-full animate-spin"></div>
          </div>
        </main>
      )
        :
      ""
    }
      <hr/>
      <Message/>
      <Announcement/>
      <footer className="py-5 flex justify-center items-center border-t-2 border-gray-100">
        Made by Walter Wang @ web3 course team 1
      </footer>      
    </>
  )
}