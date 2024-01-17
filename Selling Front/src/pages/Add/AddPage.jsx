import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddPage.scss";
import { Helmet } from "react-helmet-async";
function AddPage() {
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  async function postProduct(values) {
    const response = await fetch("http://localhost:3003/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getFetch();
  }
  async function deleteProduct(id) {
    const response = await fetch("http://localhost:3003/" + id, {
      method: "DELETE",
    });
    await getFetch()
  }
  return (
    <>
      <Formik
        initialValues={{ image: "", title: "", description: "" }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(150, "Must be 15 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            postProduct(values);
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="form">
          <label htmlFor="image">Image url</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="description">Description</label>
          <Field name="description" type="description" />
          <ErrorMessage name="description" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
  <div className="table">
  <Helmet>
          <title>Add </title>
        </Helmet>
  <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {dbData.map((x) => (
            <tr>
              <td>
                <img src={x.image} alt="" />
              </td>
              <td>{x.title}</td>
              <td>{x.description}</td>
              <td><i onClick={()=>deleteProduct(x._id)} class="fa-regular fa-trash-can"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
    </>
  );
}

export default AddPage;
