import React,{useState} from 'react'
import { View,Text,StyleSheet,Pressable,Button } from 'react-native'

const GameScreen = ({ onGameEnd }) => {
  const [coins, setCoins] = useState(21);
  console.log(coins)
  const [playerTurn, setPlayerTurn] = useState(true);
  const handleCoinPick = (num) => {
    setCoins(coins - num);
    setPlayerTurn(false);
    setTimeout(handleAITurn, 1000);
  };
  const handleAITurn = () => {
    const coinsToPick = (coins - 1) % 5;
    const aiCoins = coinsToPick === 0 ? 1 : coinsToPick;
    setCoins(coins - aiCoins);
    setPlayerTurn(true);
  };
  const handleGameEnd = () => {
    onGameEnd(playerTurn);
    setCoins(21)
  };
  const onPressHandler=(input)=>{
    handleCoinPick(input)
  }
  let timerId;
  !playerTurn && (timerId = setTimeout(handleAITurn, 1000))
  if(coins<=0){
    timerId!==undefined ? clearTimeout(timerId):""
  }
  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
        <Text style={styles.headingTxtStyle}>You have total 21 Coins</Text>
        
        </View>
       {(playerTurn && coins>0) && (<>
        <View style={styles.innerContainer}>
           <Pressable style={styles.buttonStyle} onPress={()=>{onPressHandler(+1)}}>
              <Text style={styles.buttonTextStyle}>Take 1 Coin</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={()=>{onPressHandler(+2)}}>
              <Text style={styles.buttonTextStyle}>Take 2 Coin</Text>
            </Pressable>
        </View>
        <View style={[styles.innerContainer,{marginTop:-40}]}>
           <Pressable style={styles.buttonStyle} onPress={()=>{onPressHandler(+3)}}>
              <Text style={styles.buttonTextStyle}>Take 3 Coin</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={()=>{onPressHandler(+4)}}>
              <Text style={styles.buttonTextStyle}>Take 4 Coin</Text>
            </Pressable>
        </View>
       </>)}

      {(!playerTurn) && <View style={styles.headingContainer}><Text  style={styles.headingTxtStyle}>AI is picking...</Text></View>}
      {(coins <=0) && (
        <>
         <View style={styles.headingContainer}>{!playerTurn ? <Text style={styles.headingTxtStyle}>You Win</Text>:<Text style={styles.headingTxtStyle}>You Lost</Text>}</View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Pressable style={styles.buttonStyle} onPress={handleGameEnd}>
              <Text style={styles.buttonTextStyle}>Play again</Text>
            </Pressable>
            </View>
        </>
      )}
    </View>
  )
}




const Home = () =>{
  const [games, setGames] = useState([]);
  const handleGameEnd = (playerLost) => {
    setGames([...games, playerLost ? 'lost' : 'won']);
  };

  const handlePlayAgain = () => {
    setGames([...games]);
  };

  return (
    <>
      <GameScreen onGameEnd={handleGameEnd} />
    </>
  );
};

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#000"
  },
  headingContainer:{
    justifyContent:'center',
  alignItems:"center"
},
headingTxtStyle:{
  color:'#39B68D',
  fontSize:25,
  marginTop:30
},
innerContainer:{
  flexDirection:'row',
  justifyContent:'space-between'
},
buttonStyle: {
  width: 200,
  backgroundColor: "#39B68D",
  padding: 15,
  marginTop: 60,
  borderRadius: 6,
  justifyContent: "center",
  alignItems: "center",
},
buttonTextStyle: {
  fontSize: 16,
  color: "white",
  fontWeight: "700",
  textAlign: "center",
},

})