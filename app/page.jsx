import ReadContract from "@/components/ReadContract";
import Informaion from "@/components/Information";
import Profile from "@/components/Profile";
import WriteContract from "@/components/WriteContract";
import Event from "@/components/Event";

const Home = () => {
  return (
    <>
      <Profile />
      <div>
        <Informaion />
      </div>
      <div>
        <ReadContract />
      </div>
      <div>
        <WriteContract />
      </div>
      <div>
        <Event />
      </div>
    </>
  );
};

export default Home;
