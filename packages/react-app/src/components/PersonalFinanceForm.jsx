import { Form, Input, Button, Slider, Space, Radio } from "antd";

export default function PersonalFinanceForm(props) {
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
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your First Name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Monthly Income"
          name="income"
          rules={[{ required: true, message: "Please input your Monthly Income!" }]}
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

      <Form.Item wrapperCol={{ span: 8 }} label="How stable is your income?" name="stability">
        <Slider defaultValue={50} />
      </Form.Item>

      <Form.Item
        name="credit"
        label="Do you regularly need extra lines of credit?"
        rules={[{ required: true, message: "Please select Yes or No!" }]}
      >
        <Radio.Group>
          <Radio.Button value="yes">Yes</Radio.Button>
          <Radio.Button value="no">No</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Please Note Any Other Relevant Information"
        name="info"
        rules={[{ message: "Please input your Info!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
