import PostList from "./PostList";

export default function Content(props) {
  return (
    <section style={{ flex: 1 }}>
      <h2>Posts</h2>
      <PostList posts={props.posts} />
    </section>
  );
}
