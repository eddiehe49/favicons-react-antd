import './App.css';
import { Link, Outlet } from "react-router-dom"
import { Menu, Layout } from 'antd';
import { DownOutlined } from "@ant-design/icons"
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">
            <Link to="/">
              Eddie He's Favicons
            </Link>
          </Menu.Item>
          <SubMenu key="Avatars SubMenu" icon={<DownOutlined />} title="Avatars">
            <Menu.Item key="Avatars-React">Avatars-React</Menu.Item>
            <Menu.Item key="Avatars-Vue">Avatars-Vue</Menu.Item>
            <SubMenu key="Avatars-JSON" title="JSON">
              <Menu.Item key="Avatars-JSONPlaceholder"><a href="http://my-json-server.typicode.com/Eddie-He-090/avatars-json/avatars" target="_blank" rel="noopener noreferrer">Favicons-JSONPlaceholder</a></Menu.Item>
              <Menu.Item key="Avatars-JSONBIN"><a href="https://api.jsonbin.io/v3/b/624173ee0618276743817ab6" target="_blank" rel="noopener noreferrer">Favicons-JSONBIN</a></Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="Favicons SubMenu" icon={<DownOutlined />} title="Favicons">
            <Menu.Item key="Favicons-React"><Link to="/about">Favicons-React</Link></Menu.Item>
            <Menu.Item key="Favicons-Vue">Favicons-Vue</Menu.Item>
            <SubMenu key="Favicons-JSON" title="JSON">
              <Menu.Item key="Favicons-JSONPlaceholder"><a href="http://my-json-server.typicode.com/Eddie-He-090/favicons-json/favicons" target="_blank" rel="noopener noreferrer">Favicons-JSONPlaceholder</a></Menu.Item>
              <Menu.Item key="Favicons-JSONBIN"><a href="https://api.jsonbin.io/v3/b/6247a881d96a510f028f6bfd" target="_blank" rel="noopener noreferrer">Favicons-JSONBIN</a></Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="about" to="/about" as={Link}>
            <Link to="/about">
              About
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Outlet />
    </div>
  );
}

export default App;
