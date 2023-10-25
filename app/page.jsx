import ReadContract from "@/components/ReadContract";
import Informaion from "@/components/Information";
import Profile from "@/components/Profile";
import WriteContract from "@/components/WriteContract";

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
    </>
  );
};

export default Home;
