import { Form, Input, Button, Slider, Space, Radio } from "antd";

export default function PersonlInfoForm(props) {
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
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your Last Name!" }]}
        >
          <Input />
        </Form.Item>
      </Space>
      <Form.Item
        label="Email Address"
        name="email"
        rules={[{ required: true, message: "Please input your Email Address!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[{ required: true, message: "Please select Yes or No!" }]}
      >
        <Radio.Group>
          <Radio.Button value="yes">Yes</Radio.Button>
          <Radio.Button value="no">No</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 8 }} label="Slider" name="slider">
        <Slider defaultValue={50} />
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
