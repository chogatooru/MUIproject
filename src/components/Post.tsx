import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";

const Post = () => {
    return (
        <Card sx={{margin:5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
                title="Relaxing Cat"
                subheader="July 20, 2024"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This cat looks so relaxed and happy, basking in the sunlight. It's a reminder to take a moment and enjoy the simple pleasures in life.
          Whether it's a cozy nap or a good meal, make sure to find time for the things that bring you joy.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    )
}

export default Post;