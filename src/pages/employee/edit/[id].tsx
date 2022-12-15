import type { NextPage } from "next";
import { useEffect } from "react";
import { wrapper } from "app/store";
import { useSelector } from "react-redux";
import { selectEmployee, fetchEmployeeById } from "app/store";
import { Form } from "@molecules";

const EditEmployee: NextPage = () => {
  const content = useSelector(selectEmployee());

  console.log(content.employee);
  return <Form edit={true} employee={content.employee} />;
};
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id: any = context.params?.id;
    await store.dispatch(fetchEmployeeById(id));
    console.log(context.params?.id);

    //console.log("State on server", store.getState());

    return {
      props: {},
    };
  }
);
export default EditEmployee;
