import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { createElement } from "react";

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Admin",
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
      {
        key: "Create Faculty",
        label: <NavLink to="/admin/create-faculty">Create Admin</NavLink>,
      },
      {
        key: "Create Admin",
        label: <NavLink to="/admin/create-student">Create Admin</NavLink>,
      },
    ],
  },
  {
    key: "sdfdf",
    label: "Option 1",
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "#1890ff",
            textAlign: "center",
            borderRadius: "5px",
            marginBottom: "10px",
            marginTop: "10px",
            cursor: "pointer",
            userSelect: "none",
            boxShadow: "0px 0px 10px #1890ff",
            transition: "all 0.3s",
          }}
        >
          CSE-UNI
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>cse university</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
