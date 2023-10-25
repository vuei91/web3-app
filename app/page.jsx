import Contract from "@/components/Contract";
import Informaion from "@/components/Information";
import Profile from "@/components/Profile";

const Home = () => {
  return (
    <>
      <Profile />
      <div>
        <Informaion />
      </div>
      <div>
        <Contract />
      </div>
    </>
  );
};

export default Home;
