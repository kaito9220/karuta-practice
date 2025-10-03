// import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/Practice.css';
import { karutaCards, type karutaCard } from '../data/karutaData.tsx';
// import { Container } from '@mui/material';

function Practice() {
  // 選択肢の数
  // const [numberOfCards, setNumberOfCards] = useState(4);
  const numberOfCards = 4;
  const [selectedCards, setSelectedCards] = useState<karutaCard[]>([]);
  // 正解のカードを選ぶ
  const [karutaCard, setKarutaCard] = useState<karutaCard | null>(null);
  // あっているかどうかのフラグ
  // const [isCorrect, setIsCorrect] = useState(false);
  // const [value, setValue] = useState('');
  // const [currentKarutas, setCurrentKarutas] = useState();

  const generateNewQuestion = () => {
    const shuffled = [...karutaCards].sort(() => 0.5 - Math.random());

    const newSelectedCards = shuffled.slice(0, numberOfCards);
    setSelectedCards(newSelectedCards);

    const newCorrectCard = newSelectedCards[Math.floor(Math.random() * numberOfCards)];
    setKarutaCard(newCorrectCard);
  }

  // 最初に一度だけかるた問題を生成
  useEffect(() => {
    generateNewQuestion();
  }, []);

  // クリックイベントのハンドラ
  const handleKarutaClick = (clickedCard: karutaCard) => {
    if(!karutaCard) {
      return;
    }

    if (clickedCard.id === karutaCard.id) {
      // setIsCorrect(true);
      alert(`正解！\n決まり字は:${karutaCard.kimariji}`);
    } else {
      // setIsCorrect(false);
      alert(`不正解！`);
    }
  };

  const handleShuffleClick = () => {
    generateNewQuestion();
  };

  if(!karutaCard) {
    return <Typography>読み込み中...</Typography>;
  }
  
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Button sx={{ m:2, border: 4, borderColor: 'primary.main' }} onClick={handleShuffleClick}>
        シャッフル
      </Button>
      <Paper sx={{ 
        p: 2, 
        // textAlign: 'center', 
        color: 'primary', 
        border: 4, 
        borderColor: 'primary.main', 
        mb: 2 
      }}>
        <Typography variant="h5" component="h2" gutterBottom>
          上の句
        </Typography>
        <Typography variant="h4" component="p" sx={{ textAlign: 'center' }}>
          {karutaCard.kamino_ku}
        </Typography>
      </Paper>
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
        }}
        >
        <Grid container spacing={3} 
        // sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
        {selectedCards.map((card) => (
          <Grid size={{ xs:6, sm: 12}} key={card.id.toString()}>
            <Button 
              variant="contained" 
              onClick={() => handleKarutaClick(card)} 
              fullWidth
              sx={{
                p: 2, 
                height: '100%',
                textAlign: 'center', 
                color: 'text.primary', 
                backgroundColor: 'background.paper',
                border: 4, 
                borderColor: 'secondary.main', 
                display: 'flex',
                alignItem: 'center',
                justifyContent: 'center',
              }}
            >
                {/* <Typography sx={{ whiteSpace: 'pre-wrap' }}>{card.kamino_ku}</Typography> */}
                <Typography 
                  className='ku'
                  sx={{ whiteSpace: 'pre-wrap' }}
                >
                  {card.torifuda}
                </Typography>
            </Button>
          </Grid>
        ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Practice;