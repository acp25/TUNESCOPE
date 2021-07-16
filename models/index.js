const Album = require('./album');
const User = require('./user');
const Tag = require('./tag');
const Genre = require('./genre');
const Comment = require('./comments');
const Playlist = require('./playlist');


// Playlist belongs to User
Playlist.belongsTo(User, {
    foreign_key: 'playlist_id'
});

//User hasOne Playlist
User.hasOne(Playlist, {
    foreign_key: 'id'
});

//Playlist hasMany Albums

Playlist.hasMany(Album, {
    foreign_key: 'id'
});

//Album belongsToMany Playlist

Album.belongsToMany(Playlist, {
    foreign_key: 'album_id'
});

//Album has one genre

Album.hasOne(Genre, {
    foreign_key: 'id',
});

//Genre belongs to many albums

Genre.belongsToMany(Album, {
    foreign_key: 'genre_id'
});

//Album has many comments
Album.hasMany(Comment, {
    foreign_key: 'album_id'
});
//Comment belongs to album
Comment.belongsTo(Album, {
    foreign_key: 'id'
});
//User has many comments
User.hasMany(Comment, {
    foreign_key: 'user_id'
});

//comment has one user

Comment.hasOne(User, {
    foreign_key: "id"
});

//Album has many tags

Album.hasMany(Tag, {
    foreign_key: 'id'
});

Tag.belongsToMany(Album, {
    foreign_key: 'tag_id'
});


// Each Playlist album_id references => multiple Album Id’s
// Each Album genre_id references => a Genre Id
// Each Album tag_id references => multiple Tag Id’s
// Each Comment album_id references => A Album Id