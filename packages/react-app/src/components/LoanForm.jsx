import { Form, Input, Button, Slider, Space, Radio, DatePicker } from "antd";

export default function LoanForm(props) {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
    >
      <Space>
        <Form.Item
          label="How much is your expense?"
          name="expense"
          rules={[{ required: true, message: "Please input your Expected Expenses!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="How much do you currently have?"
          name="balance"
          rules={[{ required: true, message: "Please input your Current Balance!" }]}
        >
          <Input />
        </Form.Item>
      </Space>
      <Form.Item
        label="Monthly Expenses"
        name="expense"
        rules={[{ required: true, message: "Please input your Monthly Expenses!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 8 }} label="Loan vs Credit Limit" name="slider">
        <Slider defaultValue={50} />
      </Form.Item>

      <Form.Item
        label="Please explain why you need the loan?"
        name="info"
        rules={[{ message: "Please input your reasoning!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="type"
        label="What type of payment do you prefer?"
        rules={[{ required: true, message: "Please select Yes or No!" }]}
      >
        <Radio.Group>
          <Radio.Button value="full">One time payment in full</Radio.Button>
          <Radio.Button value="installments">Installments</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="date"
        label="When will you repay the loan by?"
        rules={[{ required: true, message: "Please select a date!" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
