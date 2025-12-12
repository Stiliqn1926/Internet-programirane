import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const posts = [
    { id: 1, title: "React Basics", description: "Intro to React components." },
    { id: 2, title: "Component Tree", description: "How components form a tree structure." },
    { id: 3, title: "Props and State", description: "Passing data down with props." }
  ];

  return (
    <div>
      <Header />
      <Main posts={posts} />
      <Footer />
    </div>
  );
}
