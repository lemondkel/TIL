import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // default값으로 비어있는 array를 넘겨주기 때문에 coins이 처음에는 0개로 나옴
  // useState(); 이렇게 하면 컴포넌트의 시작인 coins가 undefined여서 에러남
  useEffect(() => {
    // fetch란 request나 response 같은 http 파이프라인을 구성하는 요소를 조작할 수 있게 해주는 API
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        // 우리가 json(=coins)를 얻었을 떄 json의 값을 setCoins 해줌
        setLoading(false);
        //coins 얻기 끝나면 false로 바꿔줌
      });
  }, []);
  return (

    <div>
      <h1>The Coins {loading ? "" :`(${coins.length})`}</h1>
          {/* loding 중일 때는 코인 개수 안 보이게 */}
      {loading ? (
        // 로딩 중일 때는 아래 메시지 보여주고 로딩 중 아니라면 select
      <strong>Loading...</strong>) : (<select>
        {coins.map((coin) => (
          <option>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
            USD</option>
        ))}
        {/* price도 보여주고 싶은데 price는 quotes라는 오브젝트의 USD여서 이렇게 씀 */}
      </select>
      )}
      
    </div>
  );
}

export default App;
