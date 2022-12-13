import type { NextPage } from "next";
import { wrapper } from "app/store";
import { fetchSubject, selectSubject } from "../../app/store";
import { useSelector, useStore } from "react-redux";
import { Cards } from "@organisms";
import { EmployeePageTemplate } from "components/templates";

const Home: NextPage = () => {
  const content = useSelector(selectSubject());
  console.log(content.json.employees);

  return <EmployeePageTemplate employees={content.json.employees} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(fetchSubject());

      console.log("State on server", store.getState());

      return {
        props: {},
      };
    }
);
export default Home;
