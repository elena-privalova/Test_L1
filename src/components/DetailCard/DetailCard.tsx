import {
  BaseSyntheticEvent,
  MouseEvent,
  type FC,
  useState,
  SyntheticEvent
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardMedia,
  Chip,
  Rating,
  Typography,
  CardContent,
  Avatar
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getFormattedDate } from '../../utils/getFormattedDate';
import { getFormattedAvatarPath } from '../../utils/getFormattedAvatarPath';
import defaultImage from '../../images/defaultPicture.jpeg';
import { StyledCardHeader, StyledCardHeaderBlock } from '../PostCard/styles';
import { NewsData } from '../PostCard/types';
import { addRating } from '../../store/posts';
import { AppDispatch, RootState } from '../../pages/Main/types';
import { StyledButton } from '../Header/styles';

import { StyledInfoCard } from './styles';
import './detailCard.css';
import classNames from 'classnames';

const DetailCard: FC<NewsData> = (news) => {
  const { authUser } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const handleError = (e: BaseSyntheticEvent) => {
    e.target.src = defaultImage;
  };

  const navigate = useNavigate();

  const handleClickAuthor = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    if (!!authUser) navigate(`/users/${news.authorId}`);
  };

  const [isOpen, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleClickRateButton = () => {
    setOpen(!isOpen);
  };

  const handleChangeRating = (event: SyntheticEvent) => {
    if (event.target instanceof HTMLInputElement) {
      dispatch(addRating({
        postId: news.id,
        value: Number(event.target.defaultValue)
      }));
      setRating(Number(event.target.defaultValue));
    }
  };

  return (
    <StyledInfoCard className="detail-card">
      <StyledCardHeader
        className={classNames('detail-card__header', {
          'detail-card__header--auth': !!authUser
        })}
        avatar={
          <Avatar
            alt="Author Image"
            src={getFormattedAvatarPath(news.author.avatarPath)}
          />
        }
        title={news.title}
        titleTypographyProps={StyledCardHeaderBlock.titleTypographyProps}
        subheader={news.author.email}
        subheaderTypographyProps={StyledCardHeaderBlock.subheaderTypographyProps}
        onClick={handleClickAuthor}
      />
      <div className="detail-card__picture picture">
        <CardMedia
          className="picture"
          component="img"
          height="380px"
          image={`https://api.news.academy.dunice.net${news.coverPath}`}
          onError={handleError}
          alt="News image"
        />
      </div>
      <CardContent>
        <Typography
          className="detail-card__text"
          variant="body2"
          color="text.secondary"
        >
          {news.text}
        </Typography>
        <div className="detail-card__tags">
          {news.tags.map((tag) => <Chip key={tag.id} label={tag.value} />)}
        </div>
        <div className="detail-card__rating-group rating-group">
          <Typography>Rating: {news.rating}</Typography>
          {authUser != null && (
            <StyledButton
              variant="contained"
              onClick={handleClickRateButton}
            >
              Rate
            </StyledButton>
          )}
          {isOpen && (
            <Rating
              name="Rating"
              value={rating}
              onChange={handleChangeRating}
            />
          )}
        </div>
      </CardContent>
      <span className="detail-card__date">{getFormattedDate(news.createdAt)}</span>
    </StyledInfoCard>
  );
};

export default DetailCard;

