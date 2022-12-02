import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

const setData = (data) => {
  let {
    id,
    voteHeadType,
    voteHead,
    date,
    voteHeadAmount,
    voteHeadComments,
    voteHeadDescription,
    checkbox,
  } = data;
  localStorage.setItem("ID", id);
  localStorage.setItem("Vote Head Category", voteHeadType);
  localStorage.setItem("Vote Head Description", voteHeadDescription);
  localStorage.setItem("Vote Head Code", voteHead);
  localStorage.setItem("Amount-Kshs", voteHeadAmount);
  localStorage.setItem("Comments", voteHeadComments);
  localStorage.setItem("Date", date);
  localStorage.setItem("Checkbox Value", checkbox);
};

export default function View() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6388a838a4bb27a7f78ddaf4.mockapi.io/healthcare")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://6388a838a4bb27a7f78ddaf4.mockapi.io/healthcare/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get("https://6388a838a4bb27a7f78ddaf4.mockapi.io/healthcare")
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <div className="view-table table">
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Vote Head Category</Table.HeaderCell>
          <Table.HeaderCell>Vote Head Description</Table.HeaderCell>
          <Table.HeaderCell>Vote Head Code</Table.HeaderCell>
          <Table.HeaderCell>Amount-Kshs</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Checkbox</Table.HeaderCell>
          <Table.HeaderCell>View</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.voteHeadType}</Table.Cell>
              <Table.Cell>{data.voteHeadDescription}</Table.Cell>
              <Table.Cell>{data.voteHead}</Table.Cell>
              <Table.Cell>{data.voteHeadAmount}</Table.Cell>
              <Table.Cell>{data.voteHeadComments}</Table.Cell>
              <Table.Cell>{data.date}</Table.Cell>
              <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
              <Table.Cell>
                <Button>
                  <Link to={"/view"}>View </Link>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => setData(data)}>
                  <Link to={"/update"}>Update</Link>
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
      </Table>
    </div>
  );
}
