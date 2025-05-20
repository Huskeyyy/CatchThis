export interface Question {
  id: number;
  trace: string;
  language: "javascript" | "python" | "java" | "csharp";
  choices: string[];
  answer: number; // Uses a zero based index so 0-3 for the answer
  explanation: string;
}

export const questions: Question[] = [
  // JavaScript Questions
  {
    id: 1,
    language: "javascript",
    trace: `TypeError: Cannot read properties of undefined (reading 'name')
    at UserProfile (http://localhost:3000/components/UserProfile.js:12:22)
    at renderWithHooks (http://localhost:3000/node_modules/react-dom/cjs/react-dom.development.js:14803:18)
    at updateFunctionComponent (http://localhost:3000/node_modules/react-dom/cjs/react-dom.development.js:17034:20)`,
    choices: [
      "Accessing a property on an undefined object",
      "Incorrect function parameter order",
      "Syntax error in JSX",
      "Missing React import",
    ],
    answer: 0,
    explanation:
      "This error happens when trying to access a property (name) on an undefined object. Often occurs when data isn't loaded yet or a variable isn't initialized properly.",
  },
  {
    id: 2,
    language: "javascript",
    trace: `Uncaught RangeError: Maximum call stack size exceeded
    at factorial (http://localhost:3000/utils/math.js:5:16)
    at factorial (http://localhost:3000/utils/math.js:5:27)
    at factorial (http://localhost:3000/utils/math.js:5:27)`,
    choices: [
      "For loop with incorrect termination condition",
      "Memory leak in React component",
      "Infinite recursion without base case",
      "Too many event listeners",
    ],
    answer: 2,
    explanation:
      "This is a classic stack overflow error caused by a recursive function that never reaches its base case, causing infinite recursion until the call stack is exhausted.",
  },
  {
    id: 3,
    language: "javascript",
    trace: `Uncaught SyntaxError: Unexpected token ')'
    at http://localhost:3000/components/Form.js:24:31`,
    choices: [
      "Missing closing parenthesis",
      "Extra closing parenthesis",
      "Missing semicolon",
      "Invalid async/await usage",
    ],
    answer: 1,
    explanation:
      "This syntax error occurs when there's an extra closing parenthesis or bracket that doesn't match an opening one.",
  },
  {
    id: 4,
    language: "javascript",
    trace: `TypeError: Failed to fetch
    at fetchUserData (http://localhost:3000/api/users.js:8:10)
    at async getUserProfile (http://localhost:3000/components/Profile.js:12:22)`,
    choices: [
      "CORS policy violation",
      "Network request failure",
      "API rate limit exceeded",
      "Invalid JSON response",
    ],
    answer: 1,
    explanation:
      "This error typically indicates a network failure when making a fetch request. It could be due to no internet connection, a CORS issue, or the server being down.",
  },
  {
    id: 5,
    language: "javascript",
    trace: `Uncaught ReferenceError: x is not defined
    at calculateTotal (script.js:15:5)
    at script.js:22:1`,
    choices: [
      "Variable used before declaration",
      "Missing function return statement",
      "Using let instead of const",
      "Incorrect arrow function syntax",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to use a variable that hasn't been declared in the current scope.",
  },
  {
    id: 6,
    language: "javascript",
    trace: `Uncaught TypeError: Cannot read property 'map' of null
    at renderList (components/List.js:10:15)
    at useEffect (components/List.js:5:7)`,
    choices: [
      "Trying to map over null value",
      "Missing key prop in list items",
      "Incorrect useEffect dependencies",
      "Async function without await",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to call .map() on a null value instead of an array.",
  },
  {
    id: 7,
    language: "javascript",
    trace: `Uncaught (in promise) Error: A cross-origin error was thrown
    at fetchData (api.js:12:11)
    at async loadDashboard (dashboard.js:8:20)`,
    choices: [
      "Missing Content-Type header",
      "CORS policy blocking request",
      "Invalid HTTP method",
      "Missing authentication token",
    ],
    answer: 1,
    explanation:
      "This error occurs when a request to a different domain is blocked by the browser's same-origin policy.",
  },
  {
    id: 8,
    language: "javascript",
    trace: `Warning: Can't perform a React state update on an unmounted component.
    at Home (components/Home.js:15:24)`,
    choices: [
      "Memory leak from unresolved promise",
      "Missing PropTypes definition",
      "Using state in functional component",
      "Updating state after component unmounts",
    ],
    answer: 3,
    explanation:
      "This warning appears when trying to update a component's state after it has been unmounted from the DOM.",
  },
  {
    id: 9,
    language: "javascript",
    trace: `Uncaught TypeError: Object(...) is not a function
    at Module../src/index.js (index.js:12:50)`,
    choices: [
      "Missing default export",
      "Incorrect hook usage",
      "Circular dependency",
      "Trying to call non-function as function",
    ],
    answer: 3,
    explanation:
      "This error occurs when trying to invoke something as a function that isn't actually a function.",
  },
  {
    id: 10,
    language: "javascript",
    trace: `Uncaught SyntaxError: Unexpected token '{'
    at Object.defineProperty.value (app.js:45:15)`,
    choices: [
      "Missing comma in object literal",
      "Invalid destructuring syntax",
      "Using reserved keyword as variable name",
      "Missing closing bracket",
    ],
    answer: 0,
    explanation:
      "This syntax error often occurs when forgetting a comma between object properties or array elements.",
  },

  // Python Questions
  {
    id: 11,
    language: "python",
    trace: `Traceback (most recent call last):
  File "app.py", line 42, in <module>
    result = process_data(data)
  File "app.py", line 27, in process_data
    return data[0]['values'] / total
KeyError: 'values'`,
    choices: [
      "Division by zero",
      "Missing dictionary key",
      "Index out of range",
      "Type conversion error",
    ],
    answer: 1,
    explanation:
      "This KeyError indicates Python tried to access a dictionary with a key ('values') that doesn't exist in the dictionary.",
  },
  {
    id: 12,
    language: "python",
    trace: `Traceback (most recent call last):
  File "data_processor.py", line 15, in <module>
    for item in items:
TypeError: 'int' object is not iterable`,
    choices: [
      "Using wrong variable type",
      "Missing import statement",
      "Attempting to iterate over a number",
      "Incorrect function definition",
    ],
    answer: 2,
    explanation:
      "This error happens when trying to use a for loop on an integer. Only iterable objects like lists, strings, or dictionaries can be iterated over.",
  },
  {
    id: 13,
    language: "python",
    trace: `Traceback (most recent call last):
  File "script.py", line 8, in <module>
    print(10 / 0)
ZeroDivisionError: division by zero`,
    choices: [
      "Invalid mathematical operation",
      "Division by zero",
      "Incorrect operator precedence",
      "Missing parentheses",
    ],
    answer: 1,
    explanation:
      "This error occurs when attempting to divide a number by zero.",
  },
  {
    id: 14,
    language: "python",
    trace: `Traceback (most recent call last):
  File "app.py", line 5, in <module>
    from utils.helpers import calculate
ModuleNotFoundError: No module named 'utils'`,
    choices: [
      "Missing __init__.py file",
      "Incorrect module import path",
      "Circular import",
      "Python version mismatch",
    ],
    answer: 1,
    explanation:
      "This error occurs when Python can't find the module you're trying to import.",
  },
  {
    id: 15,
    language: "python",
    trace: `Traceback (most recent call last):
  File "example.py", line 3, in <module>
    with open('data.txt') as f:
FileNotFoundError: [Errno 2] No such file or directory: 'data.txt'`,
    choices: [
      "File permission issue",
      "File not found at specified path",
      "Invalid file encoding",
      "File already in use",
    ],
    answer: 1,
    explanation:
      "This error occurs when trying to open a file that doesn't exist at the specified path.",
  },
  {
    id: 16,
    language: "python",
    trace: `Traceback (most recent call last):
  File "app.py", line 10, in <module>
    user = User(name="Alice", age="thirty")
  File "models.py", line 15, in __init__
    self.age = int(age)
ValueError: invalid literal for int() with base 10: 'thirty'`,
    choices: [
      "Invalid string formatting",
      "Type conversion error",
      "Missing required argument",
      "Incorrect method signature",
    ],
    answer: 1,
    explanation:
      "This error occurs when trying to convert a string to an integer when the string doesn't represent a valid number.",
  },
  {
    id: 17,
    language: "python",
    trace: `Traceback (most recent call last):
  File "app.py", line 7, in <module>
    data = json.loads(response)
  File "/usr/lib/python3.8/json/__init__.py", line 357, in loads
    return _default_decoder.decode(s)
  File "/usr/lib/python3.8/json/decoder.py", line 337, in decode
    obj, end = self.raw_decode(s, idx=_w(s, 0).end())
  File "/usr/lib/python3.8/json/decoder.py", line 355, in raw_decode
    raise JSONDecodeError("Expecting value", s, err.value) from None
json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)`,
    choices: [
      "Invalid JSON syntax",
      "Missing JSON file",
      "Encoding mismatch",
      "Memory limit exceeded",
    ],
    answer: 0,
    explanation: "This error occurs when trying to parse invalid JSON data.",
  },
  {
    id: 18,
    language: "python",
    trace: `Traceback (most recent call last):
  File "app.py", line 12, in <module>
    result = calculate_average(numbers)
  File "stats.py", line 8, in calculate_average
    return sum(numbers) / len(numbers)
TypeError: unsupported operand type(s) for +: 'int' and 'str'`,
    choices: [
      "Mixed type operations",
      "Missing return statement",
      "Incorrect function parameters",
      "Variable scope issue",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to perform operations between incompatible types (like adding a string to a number).",
  },
  {
    id: 19,
    language: "python",
    trace: `Traceback (most recent call last):
  File "app.py", line 18, in worker
    task = queue.get_nowait()
  File "/usr/lib/python3.8/queue.py", line 198, in get_nowait
    return self.get(block=False)
  File "/usr/lib/python3.8/queue.py", line 167, in get
    raise Empty
queue.Empty`,
    choices: [
      "Database connection timeout",
      "Empty queue access",
      "Thread synchronization issue",
      "Resource limit reached",
    ],
    answer: 1,
    explanation:
      "This error occurs when trying to get an item from an empty queue.",
  },
  {
    id: 20,
    language: "python",
    trace: `Traceback (most recent call last):
  File "app.py", line 5, in <module>
    from .models import User
ImportError: attempted relative import with no known parent package`,
    choices: [
      "Missing virtual environment",
      "Incorrect relative import",
      "Package not installed",
      "Python path issue",
    ],
    answer: 1,
    explanation:
      "This error occurs when trying to use a relative import in a Python file that's not part of a package.",
  },

  // Java Questions
  {
    id: 21,
    language: "java",
    trace: `Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
    at com.example.ArrayExample.main(ArrayExample.java:8)`,
    choices: [
      "Null pointer exception",
      "Invalid type conversion",
      "Thread synchronization issue",
      "Array index out of bounds",
    ],
    answer: 3,
    explanation:
      "This error occurs when trying to access an array element at index 5, but the array only has elements from index 0 to 4 (length 5).",
  },
  {
    id: 22,
    language: "java",
    trace: `Exception in thread "main" java.lang.ClassCastException: class java.lang.String cannot be cast to class java.lang.Integer
    at com.example.TypeConverter.convert(TypeConverter.java:23)
    at com.example.App.main(App.java:12)`,
    choices: [
      "Missing class definition",
      "Invalid type casting",
      "Abstract class instantiation",
      "Interface implementation error",
    ],
    answer: 1,
    explanation:
      "This error occurs when trying to cast an object to an incompatible type, in this case trying to convert a String to an Integer directly.",
  },
  {
    id: 23,
    language: "java",
    trace: `Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "str" is null
    at com.example.StringProcessor.process(StringProcessor.java:15)
    at com.example.Main.main(Main.java:10)`,
    choices: [
      "Missing string initialization",
      "Invalid string operation",
      "Memory overflow",
      "Thread deadlock",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to call a method on a null object reference.",
  },
  {
    id: 24,
    language: "java",
    trace: `Exception in thread "main" java.io.FileNotFoundException: data.txt (No such file or directory)
    at java.base/java.io.FileInputStream.open0(Native Method)
    at java.base/java.io.FileInputStream.open(FileInputStream.java:216)
    at java.base/java.io.FileInputStream.<init>(FileInputStream.java:157)
    at com.example.FileReader.readFile(FileReader.java:12)`,
    choices: [
      "File permission issue",
      "File not found at path",
      "Invalid file encoding",
      "File system error",
    ],
    answer: 1,
    explanation:
      "This error occurs when trying to access a file that doesn't exist at the specified path.",
  },
  {
    id: 25,
    language: "java",
    trace: `Exception in thread "main" java.lang.StackOverflowError
    at com.example.Recursive.factorial(Recursive.java:8)
    at com.example.Recursive.factorial(Recursive.java:8)`,
    choices: [
      "Memory leak",
      "Infinite recursion",
      "Thread stack size too small",
      "Circular dependency",
    ],
    answer: 1,
    explanation:
      "This error occurs when a recursive function calls itself too many times, exhausting the stack space.",
  },
  {
    id: 26,
    language: "java",
    trace: `Exception in thread "main" java.lang.IllegalArgumentException: Input cannot be negative
    at com.example.Calculator.sqrt(Calculator.java:15)
    at com.example.Main.main(Main.java:12)`,
    choices: [
      "Invalid mathematical operation",
      "Method precondition violation",
      "Type mismatch",
      "Arithmetic overflow",
    ],
    answer: 1,
    explanation:
      "This error occurs when a method receives an argument that violates its documented constraints.",
  },
  {
    id: 27,
    language: "java",
    trace: `Exception in thread "main" java.util.ConcurrentModificationException
    at java.base/java.util.ArrayList$Itr.checkForComodification(ArrayList.java:1013)
    at java.base/java.util.ArrayList$Itr.next(ArrayList.java:967)
    at com.example.ListProcessor.process(ListProcessor.java:22)`,
    choices: [
      "Modifying collection while iterating",
      "Thread synchronization issue",
      "Invalid collection type",
      "Memory allocation failure",
    ],
    answer: 0,
    explanation:
      "This error occurs when a collection is modified while it's being iterated over.",
  },
  {
    id: 28,
    language: "java",
    trace: `Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
    at com.example.DataProcessor.loadLargeFile(DataProcessor.java:45)
    at com.example.Main.main(Main.java:15)`,
    choices: [
      "Infinite loop",
      "Memory leak",
      "Insufficient heap space",
      "Database connection leak",
    ],
    answer: 2,
    explanation:
      "This error occurs when the JVM cannot allocate an object because it's out of memory.",
  },
  {
    id: 29,
    language: "java",
    trace: `Exception in thread "main" java.lang.UnsupportedOperationException
    at java.base/java.util.Collections$UnmodifiableList.add(Collections.java:1331)
    at com.example.ListModifier.addItem(ListModifier.java:12)
    at com.example.Main.main(Main.java:10)`,
    choices: [
      "Immutable collection modification",
      "Missing interface implementation",
      "Invalid method override",
      "Abstract class instantiation",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to modify an immutable collection.",
  },
  {
    id: 30,
    language: "java",
    trace: `Exception in thread "Thread-1" java.lang.IllegalMonitorStateException: current thread is not owner
    at java.base/java.lang.Object.wait(Native Method)
    at com.example.TaskQueue.getTask(TaskQueue.java:27)
    at com.example.Worker.run(Worker.java:15)`,
    choices: [
      "Synchronization without monitor",
      "Deadlock situation",
      "Thread priority issue",
      "Race condition",
    ],
    answer: 0,
    explanation:
      "This error occurs when a thread attempts to wait on an object's monitor without owning it.",
  },

  // C# Questions
  {
    id: 31,
    language: "csharp",
    trace: `Unhandled exception. System.NullReferenceException: Object reference not set to an instance of an object.
   at Program.<Main>$(String[] args) in C:\\Projects\\Demo\\Program.cs:line 12`,
    choices: [
      "Missing dependency in project file",
      "Attempt to use null reference",
      "Invalid casting operation",
      "Threading deadlock",
    ],
    answer: 1,
    explanation:
      "This is C#'s null reference exception, occurring when you try to access a member of an object that hasn't been initialized (is null).",
  },
  {
    id: 32,
    language: "csharp",
    trace: `Unhandled exception. System.IO.FileNotFoundException: Could not find file 'C:\\Users\\dev\\data.json'.
   at System.IO.FileStream.ValidateFileHandle(SafeFileHandle fileHandle)
   at System.IO.FileStream..ctor(String path, FileMode mode, FileAccess access, FileShare share)
   at DataProcessor.LoadFile() in C:\\Projects\\App\\DataProcessor.cs:line 45`,
    choices: [
      "Database connection error",
      "Missing file or incorrect path",
      "File permission issue",
      "JSON parsing error",
    ],
    answer: 1,
    explanation:
      "This exception occurs when trying to access a file that doesn't exist at the specified path or the application doesn't have access to it.",
  },
  {
    id: 33,
    language: "csharp",
    trace: `Unhandled exception. System.IndexOutOfRangeException: Index was outside the bounds of the array.
   at Program.ProcessData() in C:\\Projects\\App\\Program.cs:line 23
   at Program.Main() in C:\\Projects\\App\\Program.cs:line 12`,
    choices: [
      "Invalid array access",
      "Null reference",
      "Type mismatch",
      "Memory overflow",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to access an array element with an index that's outside the valid range.",
  },
  {
    id: 34,
    language: "csharp",
    trace: `Unhandled exception. System.InvalidOperationException: Collection was modified; enumeration operation may not execute.
   at System.Collections.Generic.List\`1.Enumerator.MoveNext()
   at Program.PrintAll() in C:\\\\Projects\\\\App\\\\Program.cs:line 34
   at Program.Main() in C:\\\\Projects\\\\App\\\\Program.cs:line 12`,
    choices: [
      "Modifying collection during iteration",
      "Thread synchronization issue",
      "Invalid collection type",
      "Memory allocation failure",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to modify a collection while enumerating over it.",
  },
  {
    id: 35,
    language: "csharp",
    trace: `Unhandled exception. System.FormatException: Input string was not in a correct format.
   at System.Number.ThrowOverflowOrFormatException(ParsingStatus status, TypeCode type)
   at System.Convert.ToInt32(String value)
   at Program.ParseInput() in C:\\\\Projects\\\\App\\\\Program.cs:line 28`,
    choices: [
      "Invalid string parsing",
      "Type conversion error",
      "Null reference",
      "Arithmetic overflow",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to parse a string that doesn't have the expected format.",
  },
  {
    id: 36,
    language: "csharp",
    trace: `Unhandled exception. System.ArgumentException: An item with the same key has already been added.
   at System.Collections.Generic.Dictionary\`2.TryInsert(TKey key, TValue value, InsertionBehavior behavior)
   at Program.AddToDictionary() in C:\\\\Projects\\\\App\\\\Program.cs:line 42`,
    choices: [
      "Duplicate key in dictionary",
      "Invalid key type",
      "Thread safety violation",
      "Memory allocation issue",
    ],
    answer: 0,
    explanation:
      "This error occurs when trying to add a duplicate key to a dictionary.",
  },
  {
    id: 37,
    language: "csharp",
    trace: `Unhandled exception. System.TimeoutException: The operation has timed out.
   at System.Net.Http.HttpClient.HandleFinishSendAsyncError(Exception e, CancellationTokenSource cts)
   at Program.FetchData() in C:\\Projects\\App\\Program.cs:line 56`,
    choices: [
      "Network request timeout",
      "Database connection issue",
      "Thread deadlock",
      "Infinite loop",
    ],
    answer: 0,
    explanation:
      "This error occurs when an operation exceeds its allotted time.",
  },
  {
    id: 38,
    language: "csharp",
    trace: `Unhandled exception. System.NotImplementedException: The method or operation is not implemented.
   at Program.ProcessRequest() in C:\\Projects\\App\\Program.cs:line 67
   at Program.Main() in C:\\Projects\\App\\Program.cs:line 15`,
    choices: [
      "Missing method implementation",
      "Interface not implemented",
      "Abstract class instantiation",
      "Invalid method override",
    ],
    answer: 0,
    explanation:
      "This error occurs when code calls a method that hasn't been implemented yet.",
  },
  {
    id: 39,
    language: "csharp",
    trace: `Unhandled exception. System.UnauthorizedAccessException: Access to the path 'C:\\system\\file.txt' is denied.
   at System.IO.FileStream.ValidateFileHandle(SafeFileHandle fileHandle)
   at System.IO.FileStream..ctor(String path, FileMode mode, FileAccess access, FileShare share)
   at Program.WriteToFile() in C:\\Projects\\App\\Program.cs:line 39`,
    choices: [
      "File permission issue",
      "File not found",
      "Invalid file path",
      "Disk full",
    ],
    answer: 0,
    explanation:
      "This error occurs when the application doesn't have permission to access the specified file.",
  },
  {
    id: 40,
    language: "csharp",
    trace: `Unhandled exception. System.AggregateException: One or more errors occurred. (The SSL connection could not be established.)
 ---> System.Security.Authentication.AuthenticationException: The SSL connection could not be established.
   at System.Net.Security.SslStream.StartSendAuthResetSignal(ProtocolToken message, AsyncProtocolRequest asyncRequest, ExceptionDispatchInfo exception)
   at Program.MakeApiCall() in C:\\Projects\\App\\Program.cs:line 62`,
    choices: [
      "SSL certificate issue",
      "Invalid API endpoint",
      "Network connectivity problem",
      "Authentication failure",
    ],
    answer: 0,
    explanation:
      "This error occurs when there's a problem establishing an SSL/TLS connection.",
  },
];

// Helper to get a random set of questions
export function getRandomQuestions(count: number = 5): Question[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper to get the questoins by language
export function getQuestionsByLanguage(
  language: string,
  count: number = 5
): Question[] {
  const filtered = questions.filter((q) => q.language === language);
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
