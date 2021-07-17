const Album = require('./album');
const User = require('./user');
const Tag = require('./tag');
const Genre = require('./genre');
const Comment = require('./comments');
const Playlist = require('./playlist');
const Subgenre = require('./subgenre');
<<<<<<< HEAD
=======


>>>>>>> 9100dd566e501b08872ca3c3dbe95b42cfc62862
// Playlist belongs to User
User.belongsTo(Playlist, {
    foreign_key: 'playlist_id'
});
//User hasOne Playlist
Playlist.hasOne(User, {
    foreign_key: 'playlist_id'
});
//Playlist hasMany Albums
Playlist.hasMany(Album, {
    foreign_key: 'playlist_album_id'
});
//Album belongsToMany Playlist
<<<<<<< HEAD
=======

>>>>>>> 9100dd566e501b08872ca3c3dbe95b42cfc62862
Album.belongsTo(Playlist, {
    foreign_key: 'playlist_album_id'
});
//Album has one genre
<<<<<<< HEAD
=======

>>>>>>> 9100dd566e501b08872ca3c3dbe95b42cfc62862
Genre.hasMany(Album, {
    foreign_key: 'genre_id',
});
//Genre belongs to many albums
<<<<<<< HEAD
=======

>>>>>>> 9100dd566e501b08872ca3c3dbe95b42cfc62862
Album.belongsTo(Genre, {
    foreign_key: 'genre_id'
});
//Album has many comments
Album.hasMany(Comment, {
    foreign_key: 'album_id'
});
//Comment belongs to album
Comment.belongsTo(Album, {
    foreign_key: 'album_id'
});
//User has many comments
User.hasMany(Comment, {
    foreign_key: 'user_id'
});
//comment has one user
<<<<<<< HEAD
=======

>>>>>>> 9100dd566e501b08872ca3c3dbe95b42cfc62862
Comment.belongsTo(User, {
    foreign_key: "user_id"
});
//Album has many tags
<<<<<<< HEAD
=======

>>>>>>> 9100dd566e501b08872ca3c3dbe95b42cfc62862
Album.belongsToMany(Tag, {
    foreign_key: 'album_id',
    through: Subgenre
});
Tag.belongsToMany(Album, {
    foreign_key: 'tag_id',
    through: Subgenre
});
module.exports = {
    User,
    Album,
    Tag,
    Playlist,
    Comment,
    Genre,
    Subgenre
<<<<<<< HEAD
  };
=======
  };

// Each Playlist album_id references => multiple Album Id’s
// Each Album genre_id references => a Genre Id
// Each Album tag_id references => multiple Tag Id’s
// Each Comment album_id references => A Album Id
>>>>>>> 9100dd566e501b08872ca3c3dbe95b42cfc62862
