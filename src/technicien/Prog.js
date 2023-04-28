import { Progress, Space } from "antd";

const Prog = () => (
  <div className="parent text-center">
    <Space className="m-5">
      <Progress className="cercle" type="circle" percent={75} />
      <Progress
        className="cercle"
        type="circle"
        percent={70}
        status="exception"
      />
      <Progress
        className="cercle"
        style={{ marginRight: "100px" }}
        type="circle"
        percent={100}
      />
    </Space>
  </div>
);

export default Prog;
