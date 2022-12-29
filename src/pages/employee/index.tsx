import type { NextPage } from "next";
import { wrapper } from "app/store";
import { fetchEmployees, selectEmployee } from "../../app/store";
import { useSelector } from "react-redux";
import { EmployeePageTemplate } from "components/templates";
import { AlertModal } from "@atoms";
import { Alert } from "@mui/material";

const HomePage: NextPage = () => {
  const content = useSelector(selectEmployee());
  const { statusFetching, fetchEmployeeMessage } = content;

  if (statusFetching === "failed") {
    return <Alert severity="error">{fetchEmployeeMessage}</Alert>;
  } else if (statusFetching === "success") {
    return <EmployeePageTemplate employees={content.employees} />;
  } else {
    return <></>;
  }
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
export default HomePage;
