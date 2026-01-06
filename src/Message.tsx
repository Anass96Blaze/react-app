function Message() {
  let count = 0;
  count++;
  console.log(`Testing Message Component ${count}`);
  return <h1>Message {count}</h1>;
}

export default Message;
