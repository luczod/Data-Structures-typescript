- **Dictionary vs Hash**
  In a dictionary (or map), we store values in pairs [key, value].
  The same goes for hashes (they store values in pairs [key, value]),
  but the way we implement these data is a little different in that
  dictionaries can only store a unique value per key, as we will see below.

  A dictionary is a lot like a set; one set stores a collection of elements [key, key],
  while a dictionary stores a collection of elements [key, value]. A dictionary is
  also known as a map, symbol table and associative array.

- **HashTable**
  HashTable class, also known as HashMap: A hashable implementation of the Dictionary class.
  The key in a hash table is not an arbitrary value but a code/encryption based on its value;
  the method loseHashCode encrypts the value to transform it into the key of that same value

- **Hashing**
  Hashing involves finding a value in a data structure as quickly as possible.
  In previous chapters, we saw that if we want to get a value from a data structure
  (using a get method), we need to iterate through it until that value is found. page (420)

- **loseHashCode**
  Generate a number based on the sum of the value of each
  ASCII character that makes up the key.

- **remove**
  Remove a key-value from the hash table, it will not be enough
  simply remove the element from position, If we just remove the element,
  this may cause an empty position to be found when we look for another
  element with the same hash (position), resulting in a bug in the algorithm.
