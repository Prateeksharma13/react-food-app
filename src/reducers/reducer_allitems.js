import uuid from 'uuid';


export default function() {
  return [
    {
      'id' : uuid.v4(),
      'name' : 'one',
      'price' : 10
    },
    {
      'id' : uuid.v4(),
      'name' : 'two',
      'price' : 20
    },
    {
      'id' : uuid.v4(),
      'name' : 'three',
      'price' : 30
    }
  ]
}
