* {
    margin: 0;
    padding: 0;
  }
  
  .container {
    height: 100vh;
    width: 100vw;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: white;
  }
  
  .tag {
    height: 80px;
    width: 435px;
    background: linear-gradient(rgb(225, 5, 148), rgb(233, 13, 13));
    border-radius: 10px;
    color: #ffffff;
    font-family: helvetica;
    line-height: 80px;
    text-align: center;
    font-weight: 900;
    font-size: 50px;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-top: -50px;
    box-shadow: 0 0 10px -3px #ffffff inset;
  }
  /*.tag:after {
    content: "Bestfriend";
  }
  */
  .container .tag :hover {
    color: rgb(247, 247, 62);
  }
  .ribbon {
    width: 100%;
    height: 20px;
    background: rgb(255, 255, 255);
    box-shadow: 0 0 10px -3px #333;
  }
  .tag a {
    color: white;
    text-decoration: none;
  }
  p {
    position: absolute;
    color: rgb(85, 183, 225);
    top: 60%;
    font-family: "Courier New", Courier, monospace;
    font-weight: 500;
  }
  