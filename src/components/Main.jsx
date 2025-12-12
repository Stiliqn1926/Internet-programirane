import Sidebar from "./SideBar";
import Content from "./Content";

export default function Main(props) {
  return (
    <main style={{ display: "flex", gap: 20, padding: 20 }}>
      <Sidebar />
      <Content posts={props.posts} />
    </main>
  );
}
