import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  width: 700px;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  @media screen and (max-width: 768px) {
   width:400px;
   position: fixed;
    
  }


`;
const Form = styled.form`

  
`;
const Top = styled.div`
`;

const TopContainer = styled.div`
  border: 1px solid gray;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  color: grey;
  @media screen and (max-width: 768px) {
   width:400px;
  margin:0px 20px;
  }
  @media screen and (max-width: 480px) {
   width:300px;
  margin:0px 20px;
  }
  @media screen and (max-width: 340px) {
   width:200px;
  margin:0px 20px;
  }


`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.label`
  font-weight: 900;
  font-size: 20px;
`;

const Amount = styled.input`
  outline: none;
  border: none;
  font-size: 20px;
  color: black;
  border-radius: 5px;
  /* margin-bottom:20px; */
  font-weight: bold;
  padding: 10px;
  width: 50%;
  background-color: lightgray;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Select = styled.select`
  outline: none;
  border: none;
  font-size: 20px;
  color: black;
  border-radius: 5px;
  /* margin-bottom:20px; */
  font-weight: bold;
  padding: 10px;
  width: 100%;
  background-color: lightgrey;
`;

const Option = styled.option`
  font-size: 20px;
  padding: 10px;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  background-color: teal;
  outline: none;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 10px;
`;

const Last = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Convert = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: teal;
  border-radius: 5px;
  outline: none;
  border: none;
  color: whitesmoke;
`;

const Bottom = styled.div``;

const Main = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const [data, setData] = useState({});

  useEffect(() => {
    const totalData = (currency) => {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
        .then((res) => res.json())
        .then((res) => setData(res[currency]));
    };
    totalData(from);
  }, [from]);

  // const currencyInfo = data

  const options = Object.keys(data);
  // console.log(data);
  console.log(options);

  const convert = () => {
    setConvertedAmount(amount * data[to]);
  };
  // const swap = () => {
  //   setFrom(to);
  //   setTo(from);
  //   // setAmount(convertedAmount);
  //   // setConvertedAmount(amount);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    convert();
  };

  const reload = () => {
    window.location.reload();
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Top>
          <TopContainer>
            <Left>
              <Title>From</Title>
              <Amount
                type="number"
                value={amount}
                disabled={false}
                onChange={(e) => setAmount && setAmount(Number(e.target.value))}
              ></Amount>
            </Left>
            <Right>
              <Title>Currency Type</Title>
              <Select
                value={from}
                onChange={(e) => {
                  setFrom && setFrom(e.target.value);
                }}
                disabled={false}
              >
                {options.map((selectdCurrency) => (
                  <Option key={selectdCurrency} value={selectdCurrency}>
                    {selectdCurrency}
                  </Option>
                ))}
              </Select>
            </Right>
          </TopContainer>
        </Top>
        <Middle>
          {/* <Button onClick={(e) => swap(e.target.value)}>Swap</Button> */}
          <Button onClick={reload}>Reload</Button>
        </Middle>
        <Bottom>
          <TopContainer>
            <Left>
              <Title>To</Title>
              <Amount
                type="number"
                value={convertedAmount}
                onChange={(e) =>
                  setConvertedAmount &&
                  setConvertedAmount(Number(e.target.value))
                }
              ></Amount>
            </Left>
            <Right>
              <Title>Currency Type</Title>
              <Select
                value={to}
                onChange={(e) => {
                  setTo && setTo(e.target.value);
                }}
              >
                {options.map((selectdCurrency) => (
                  <Option key={selectdCurrency} value={selectdCurrency}>
                    {selectdCurrency}
                  </Option>
                ))}
              </Select>
            </Right>
          </TopContainer>
        </Bottom>
        <Last>
          <Convert type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </Convert>
        </Last>
      </Form>
    </Container>
  );
};

export default Main;
