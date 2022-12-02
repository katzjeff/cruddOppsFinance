import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import axios from "axios";

export default function CreateForm() {
  //Form fields
  const [voteHead, setVoteHead] = useState("");
  const [voteHeadDescription, setVoteHeadDescription] = useState("");
  const [voteHeadAmount, setVoteHeadAmount] = useState("");
  const [date, setDate] = useState("");
  const [voteHeadType, setVoteHeadType] = useState("");
  const [voteHeadComments, setVoteHeadComments] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post("https://6388a838a4bb27a7f78ddaf4.mockapi.io/healthcare", {
      voteHead: voteHead,
      voteHeadDescription: voteHeadDescription,
      voteHeadAmount: voteHeadAmount,
      date: date,
      voteHeadType: voteHeadType,
      voteHeadComments: voteHeadComments,
      checkbox: checkbox,
    });
    // console.log(
    //   voteHead,
    //   voteHeadDescription,
    //   voteHeadAmount,
    //   date,
    //   voteHeadType,
    //   voteHeadComments,
    //   checkbox
    // );
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Vote Head Category</label>
          <Input
            fluid
            placeholder="Enter | Select vote head category"
            onChange={(e) => setVoteHeadType(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Vote Head Description</label>
          <Input
            fluid
            placeholder="Enter | Select the vote head"
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
            onChange={(e) => setVoteHead(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Amount Spent - Kshs</label>
          <Input
            fluid
            placeholder="Enter Amount spent...1,000,000.00"
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
            onChange={(e) => setVoteHeadComments(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <Input
            fluid
            placeholder="Enter the Date...dd-mm-yyyy"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
}
