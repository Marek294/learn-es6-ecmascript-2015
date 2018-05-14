import * as _ from 'lodash';

import * as addition from 'math/addition';
import {users} from 'data/users';

console.log(_.where(users, {age: 36}));

console.log(
  "1 + 5",
addition.sumTwo(1, 5)
);

console.log(
  "1 + 9 + 7",
  addition.sumThree(1, 9, 7)
);
