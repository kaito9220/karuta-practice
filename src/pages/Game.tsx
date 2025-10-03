import /*React,*/ { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { karutaCards, type karutaCard } from '../data/karutaData.tsx';

// 札のスタイル
const cardStyle = {
  width: '100px',
  height: '140px',
  writingMode: 'vertical-rl', // 文字を縦書きにする
  textOrientation: 'upright',
  p: 1,
  fontSize: '1rem',
  textAlign: 'center',
  color: 'text.primary',
  backgroundColor: 'background.paper',
  border: 2,
  borderColor: 'grey.500',
  whiteSpace: 'pre-wrap',
  lineHeight: 1.5,
};

function Game() {
  const [playerCards, setPlayerCards] = useState<karutaCard[]>([]);
  const [opponentCards, setOpponentCards] = useState<karutaCard[]>([]);

  useEffect(() => {
    // 24枚の札をランダムに選ぶ
    const shuffled = [...karutaCards].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 24);

    // 12枚ずつ自陣と敵陣に分ける
    setOpponentCards(selected.slice(0, 12));
    setPlayerCards(selected.slice(12, 24));
  }, []);

  // 札の配列を段ごとに分割するヘルパー関数
  const createRows = (cards: karutaCard[], cardsPerRow: number) => {
    const rows = [];
    for (let i = 0; i < cards.length; i += cardsPerRow) {
      rows.push(cards.slice(i, i + cardsPerRow));
    }
    return rows;
  };

  // それぞれの陣を3段に分ける（1段あたり4枚）
  const opponentRows = createRows(opponentCards, 4);
  const playerRows = createRows(playerCards, 4);

  return (
    <Box sx={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', // 全体を縦に並べる
      alignItems: 'center', 
      p: 2,
      backgroundColor: '#4CAF50', // 畳のような緑色
      mb: 10
    }}>
      {/* 敵陣エリア */}
      <Box mb={4}>
        {opponentRows.map((row, rowIndex) => (
          <Box key={`opponent-row-${rowIndex}`} sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            {row.map(card => (
              <Button key={card.id} sx={{ 
                ...cardStyle, 
                mx: 0.5,
                // 180度の回転を追加し、その後ろにランダムな回転を組み合わせる
                transform: `rotate(180deg) rotate(${(Math.random() - 0.5) * 4}deg)`,
              }}>
                {card.torifuda}
              </Button>
            ))}
          </Box>
        ))}
      </Box>

      {/* 中央の空間 (あえて描画はしない) */}
      
      {/* 自陣エリア */}
      <Box>
        {playerRows.map((row, rowIndex) => (
          <Box key={`player-row-${rowIndex}`} sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            {row.map(card => (
              <Button key={card.id} sx={{ 
                ...cardStyle, 
                mx: 0.5,
                transform: `rotate(${(Math.random() - 0.5) * 4}deg)`,
               }}>
                {card.torifuda}
              </Button>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Game;