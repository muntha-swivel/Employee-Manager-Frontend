import type { NextPage } from "next";
import { wrapper } from "app/store";
import { fetchEmployees, selectEmployee } from "../../app/store";
import { useSelector } from "react-redux";
import { Cards } from "@organisms";
import { EmployeePageTemplate } from "components/templates";
import { AlertModal } from "@atoms";
const Home: NextPage = () => {
  const content = useSelector(selectEmployee());
  console.log(content);
  // return <AlertModal />;

  return <EmployeePageTemplate employees={content.employees} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      try {
        await store.dispatch(fetchEmployees());
      } catch (err) {
        console.log(err);
      }
      //console.log("State on server", store.getState());

      return {
        props: {},
      };
    }
);
export default Home;
