// field object ex.
// {
//   name: ' | row 1 |',
//   value: '```yaml\nplaceholder\nplaceholder\nplaceholder\nplaceholder\nplaceholder\n```',
//   inline: true,
// },

// \n to <br> this makes a column when paired with inline: true

// yellow is ```fix\n```
// orange is ```arm\n```
// cyan is ```yaml\n```
// blue is ```mb\n#```
// red is ```diff\n-```
// white is ```tex\n$```

// italics *text*
// bold **text**
// bold italics ***text***

module.exports = {
  reply: {
    title: 'Command List',
    fields: [
      {
        name: '**/rpg [command]**',
        value:
          '```yaml\nlogin\nlogout\nregister\ncity\nselect class [class name]\nmove [location name]```',
        inline: true,
      },
    ],
  },
  statusCode: 2,
};
