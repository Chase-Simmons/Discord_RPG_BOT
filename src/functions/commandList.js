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

module.exports = {
  title: 'Command List',
  fields: [
    {
      name: ' | row 1 |',
      value: '```yaml\nlogin\nlogout\ncommands\nplaceholder\nplaceholder\n```',
      inline: true,
    },
    {
      name: ' | row 2 |',
      value:
        '```yaml\nplaceholder\nplaceholder\nplaceholder\nplaceholder\nplaceholder\n```',
      inline: true,
    },
    {
      name: ' | row 3 |',
      value:
        '```yaml\nplaceholder\nplaceholder\nplaceholder\nplaceholder\nplaceholder\n```',
      inline: true,
    },
  ],
};
