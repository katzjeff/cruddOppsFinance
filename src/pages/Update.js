import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Update() {
  let navigate = useNavigate();
  //Form fields
  const [voteHead, setVoteHead] = useState("");
  const [voteHeadDescription, setVoteHeadDescription] = useState("");
  const [voteHeadAmount, setVoteHeadAmount] = useState("");
  const [date, setDate] = useState("");
  const [voteHeadType, setVoteHeadType] = useState("");
  const [voteHeadComments, setVoteHeadComments] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setVoteHead(localStorage.getItem("voteHead"));
    setVoteHeadDescription(localStorage.getItem("voteHeadDescription"));
    setVoteHeadAmount(localStorage.getItem("voteHeadAmount"));
    setDate(localStorage.getItem("date"));
    setVoteHeadType(localStorage.getItem("voteHeadType"));
    setVoteHeadComments(localStorage.getItem("voteHeadComments"));
    setCheckbox(localStorage.getItem("checkbox") === 'true' ? true : false);
  }, []);

  const updateData = () => {
    axios
      .put(`https://6388a838a4bb27a7f78ddaf4.mockapi.io/healthcare/${id}`, {
        voteHead,
        voteHeadDescription,
        voteHeadAmount,
        date,
        voteHeadType,
        voteHeadComments,
        checkbox,
      })
      .then(() => {
        navigate.push("/view");
      });
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Vote Head Category</label>
          <Input
            fluid
            placeholder="Enter | Select vote head category"
            value={voteHeadType}
            onChange={(e) => setVoteHeadType(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Vote Head Description</label>
          <Input
            fluid
            placeholder="Enter | Select the vote head"
            value={voteHeadDescription}
            onChange={(e) => setVoteHeadDescription(e.target.value)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Vote Head Code</label>
          <Input
            fluid
            placeholder="Enter | Select vote head code"
            value={voteHead}
            onChange={(e) => setVoteHead(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Amount Spent - Kshs</label>
          <Input
            fluid
            placeholder="Enter Amount spent...1,000,000.00"
            value={voteHeadAmount}
            onChange={(e) => setVoteHeadAmount(e.target.value)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Comments</label>
          <Input
            fluid
            placeholder="Enter any comments"
            value={voteHeadComments}
            onChange={(e) => setVoteHeadComments(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <Input
            fluid
            placeholder="Enter the Date...dd-mm-yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={updateData} type="submit">
        <Link to="/view">Update Details</Link>
      </Button>
    </Form>
  );
}
