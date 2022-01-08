import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
const NewMeetupPage = () => {
  const router = useRouter();
  const AddMeetupHandler = async (enterMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enterMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={AddMeetupHandler} />;
};
export default NewMeetupPage;
