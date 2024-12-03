let CurrentTime = () => {
  let time = new Date();
  return (
    <p class="lead">
      Current Date: {time.toLocaleDateString()} <br/>
      Current Time: {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
