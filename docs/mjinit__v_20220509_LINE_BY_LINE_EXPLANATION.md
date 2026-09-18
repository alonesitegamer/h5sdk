# mjinit exact GitHub line-by-line explanation

Source: alonesitegamer/h5sdk
Path: h5sdk.camjm.space/static/game/mjinit__v_20220509.js
Branch: main
GitHub blob SHA: 86b55064a01c1e5eeabfc5f07776a12414868991
Source size: 154093 characters, 4189 lines.

This document explains every source line without reproducing the source code. Each entry maps to the exact line number in the GitHub source.

## Source identity

The current GitHub repository contains mjinit__v_20220509.js. A previously inspected local file named mjinit__v_20260826.js is a different file and is not treated as the exact GitHub source here.

## Verified architecture

This SDK file loads Facebook/DataWin configuration, parses game parameters, manages SDK/account state, creates signed API requests, handles login/registration/account/role/language/report/payment operations, stores state in localStorage, and communicates with the game through postMessage.

## Important control points

- Line 148: replacePackage
- Line 293: loginSuccess
- Line 308: checkFcmOpenAction
- Line 319: replacePackage
- Line 393: deK
- Line 399: getCG
- Line 412: getSign
- Line 418: getBaseParams
- Line 449: init
- Line 645: activeAction
- Line 774: checkFcmOpenAction
- Line 806: activeAction
- Line 844: getAnnouncement
- Line 858: randomAccount
- Line 872: pwdLoginAction
- Line 889: quickRegAction
- Line 1024: roleAction
- Line 1045: logoutFromGame
- Line 1196: replacePackage
- Line 1213: languageAction
- Line 1524: pwdLoginAction
- Line 1607: randomAccount
- Line 1726: quickRegAction
- Line 2492: openPay
- Line 3209: sendAppleReceipt
- Line 3261: sendAfReport
- Line 3320: sendGoogleReceipt
- Line 3341: sendOpenServiceAction
- Line 3880: init
- Line 3967: init

## Exact line map

| Line | Explanation |
|---:|---|
| 1 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2 | Blank line used to separate logical code sections. |
| 3 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 5 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 6 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 7 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 8 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 9 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 10 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 11 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 12 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 13 | Blank line used to separate logical code sections. |
| 14 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 15 | Blank line used to separate logical code sections. |
| 16 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 17 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 18 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 19 | Closes the current block/object/function. |
| 20 | Blank line used to separate logical code sections. |
| 21 | Comment only. It does not execute. |
| 22 | Comment only. It does not execute. |
| 23 | Blank line used to separate logical code sections. |
| 24 | Starts an HTTP Fetch request. |
| 25 | Adds a Promise success continuation. |
| 26 | Begins a conditional branch. |
| 27 | Returns a value and exits the current function. |
| 28 | Closes the current block/object/function. |
| 29 | Raises an exception. |
| 30 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 31 | Adds a Promise success continuation. |
| 32 | Assigns a value to a variable or object property. |
| 33 | Assigns a value to a variable or object property. |
| 34 | Begins iteration. |
| 35 | Begins a conditional branch. |
| 36 | Assigns a value to a variable or object property. |
| 37 | Assigns a value to a variable or object property. |
| 38 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 39 | Closes the current block/object/function. |
| 40 | Closes the current block/object/function. |
| 41 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 42 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 43 | Closes the current block/object/function. |
| 44 | Begins a conditional branch. |
| 45 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 46 | Closes the current block/object/function. |
| 47 | Comment only. It does not execute. |
| 48 | Comment only. It does not execute. |
| 49 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 50 | Adds a Promise failure handler. |
| 51 | Writes diagnostic information to the console. |
| 52 | Comment only. It does not execute. |
| 53 | Comment only. It does not execute. |
| 54 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 55 | Blank line used to separate logical code sections. |
| 56 | Starts an HTTP Fetch request. |
| 57 | Adds a Promise success continuation. |
| 58 | Begins a conditional branch. |
| 59 | Returns a value and exits the current function. |
| 60 | Closes the current block/object/function. |
| 61 | Raises an exception. |
| 62 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 63 | Adds a Promise success continuation. |
| 64 | Assigns a value to a variable or object property. |
| 65 | Assigns a value to a variable or object property. |
| 66 | Begins iteration. |
| 67 | Begins a conditional branch. |
| 68 | Assigns a value to a variable or object property. |
| 69 | Assigns a value to a variable or object property. |
| 70 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 71 | Closes the current block/object/function. |
| 72 | Closes the current block/object/function. |
| 73 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 74 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 75 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 76 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 77 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 78 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 79 | Closes the current block/object/function. |
| 80 | Closes the current block/object/function. |
| 81 | Begins a conditional branch. |
| 82 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 83 | Closes the current block/object/function. |
| 84 | Comment only. It does not execute. |
| 85 | Comment only. It does not execute. |
| 86 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 87 | Adds a Promise failure handler. |
| 88 | Writes diagnostic information to the console. |
| 89 | Comment only. It does not execute. |
| 90 | Comment only. It does not execute. |
| 91 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 92 | Blank line used to separate logical code sections. |
| 93 | Defines function parseParams, creating a reusable operation. |
| 94 | Begins exception handling. |
| 95 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 96 | Begins iteration. |
| 97 | URL-encodes or decodes data. |
| 98 | URL-encodes or decodes data. |
| 99 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 100 | Closes the current block/object/function. |
| 101 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 102 | Returns a value and exits the current function. |
| 103 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 104 | Returns a value and exits the current function. |
| 105 | Closes the current block/object/function. |
| 106 | Closes the current block/object/function. |
| 107 | Blank line used to separate logical code sections. |
| 108 | Defines function myConfirm, creating a reusable operation. |
| 109 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 110 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 111 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 112 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 113 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 114 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 115 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 116 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 117 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 118 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 119 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 120 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 121 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 122 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 123 | Uses jQuery. |
| 124 | Uses jQuery. |
| 125 | Uses jQuery. |
| 126 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 127 | Uses jQuery. |
| 128 | Uses jQuery. |
| 129 | Closes the current block/object/function. |
| 130 | Blank line used to separate logical code sections. |
| 131 | Defines function myReplacePackage, creating a reusable operation. |
| 132 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 133 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 134 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 135 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 136 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 137 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 138 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 139 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 140 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 141 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 142 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 143 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 144 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 145 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 146 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 147 | Uses jQuery. |
| 148 | Uses jQuery. |
| 149 | Uses jQuery. |
| 150 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 151 | Uses jQuery. |
| 152 | Closes the current block/object/function. |
| 153 | Blank line used to separate logical code sections. |
| 154 | Defines function myHint, creating a reusable operation. |
| 155 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 156 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 157 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 158 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 159 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 160 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 161 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 162 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 163 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 164 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 165 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 166 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 167 | Uses jQuery. |
| 168 | Uses jQuery. |
| 169 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 170 | Uses jQuery. |
| 171 | Closes the current block/object/function. |
| 172 | Blank line used to separate logical code sections. |
| 173 | Uses jQuery. |
| 174 | Registers a browser/runtime event listener. |
| 175 | Uses a browser DOM/window/navigation API. |
| 176 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 177 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 178 | Blank line used to separate logical code sections. |
| 179 | Blank line used to separate logical code sections. |
| 180 | Defines function IsPhone, creating a reusable operation. |
| 181 | Comment only. It does not execute. |
| 182 | Begins exception handling. |
| 183 | Begins a conditional branch. |
| 184 | Returns a value and exits the current function. |
| 185 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 186 | Returns a value and exits the current function. |
| 187 | Closes the current block/object/function. |
| 188 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 189 | Returns a value and exits the current function. |
| 190 | Closes the current block/object/function. |
| 191 | Closes the current block/object/function. |
| 192 | Blank line used to separate logical code sections. |
| 193 | Defines function getParam, creating a reusable operation. |
| 194 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 195 | Uses a browser DOM/window/navigation API. |
| 196 | Begins a conditional branch. |
| 197 | Returns a value and exits the current function. |
| 198 | Closes the current block/object/function. |
| 199 | Blank line used to separate logical code sections. |
| 200 | Comment only. It does not execute. |
| 201 | Defines function getLastParameterValue, creating a reusable operation. |
| 202 | Comment only. It does not execute. |
| 203 | Uses a browser DOM/window/navigation API. |
| 204 | Comment only. It does not execute. |
| 205 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 206 | Comment only. It does not execute. |
| 207 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 208 | Comment only. It does not execute. |
| 209 | Returns a value and exits the current function. |
| 210 | Closes the current block/object/function. |
| 211 | Blank line used to separate logical code sections. |
| 212 | Defines function postFrameMesage, creating a reusable operation. |
| 213 | Uses a browser DOM/window/navigation API. |
| 214 | Assigns a value to a variable or object property. |
| 215 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 216 | Sends a cross-window message used by the SDK/game bridge. |
| 217 | Closes the current block/object/function. |
| 218 | Blank line used to separate logical code sections. |
| 219 | Comment only. It does not execute. |
| 220 | Defines function Toast, creating a reusable operation. |
| 221 | Assigns a value to a variable or object property. |
| 222 | Uses a browser DOM/window/navigation API. |
| 223 | Assigns a value to a variable or object property. |
| 224 | Assigns a value to a variable or object property. |
| 225 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 226 | Uses a browser DOM/window/navigation API. |
| 227 | Schedules delayed execution. |
| 228 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 229 | Assigns a value to a variable or object property. |
| 230 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 231 | Assigns a value to a variable or object property. |
| 232 | Schedules delayed execution. |
| 233 | Uses a browser DOM/window/navigation API. |
| 234 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 235 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 236 | Closes the current block/object/function. |
| 237 | Blank line used to separate logical code sections. |
| 238 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 239 | Defines object method show; it operates on the containing object's state. |
| 240 | Uses jQuery. |
| 241 | Closes the current block/object/function. |
| 242 | Defines object method hide; it operates on the containing object's state. |
| 243 | Uses jQuery. |
| 244 | Closes the current block/object/function. |
| 245 | Closes the current block/object/function. |
| 246 | Blank line used to separate logical code sections. |
| 247 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 248 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 249 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 250 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 251 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 252 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 253 | Closes the current block/object/function. |
| 254 | Blank line used to separate logical code sections. |
| 255 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 256 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 257 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 258 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 259 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 260 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 261 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 262 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 263 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 264 | Closes the current block/object/function. |
| 265 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 266 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 267 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 268 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 269 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 270 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 271 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 272 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 273 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 274 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 275 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 276 | Closes the current block/object/function. |
| 277 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 278 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 279 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 280 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 281 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 282 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 283 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 284 | Closes the current block/object/function. |
| 285 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 286 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 287 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 288 | Closes the current block/object/function. |
| 289 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 290 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 291 | Closes the current block/object/function. |
| 292 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 293 | Defines object method loginSuccess; it operates on the containing object's state. |
| 294 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 295 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 296 | Blank line used to separate logical code sections. |
| 297 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 298 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 299 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 300 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 301 | Closes the current block/object/function. |
| 302 | Assigns a value to a variable or object property. |
| 303 | Assigns a value to a variable or object property. |
| 304 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 305 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 306 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 307 | Closes the current block/object/function. |
| 308 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 309 | Begins a conditional branch. |
| 310 | Uses jQuery. |
| 311 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 312 | Invokes a function or method. |
| 313 | Writes diagnostic information to the console. |
| 314 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 315 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 316 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 317 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 318 | Blank line used to separate logical code sections. |
| 319 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 320 | Begins a conditional branch. |
| 321 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 322 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 323 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 324 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 325 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 326 | Closes the current block/object/function. |
| 327 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 328 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 329 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 330 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 331 | Closes the current block/object/function. |
| 332 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 333 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 334 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 335 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 336 | Closes the current block/object/function. |
| 337 | Closes the current block/object/function. |
| 338 | Blank line used to separate logical code sections. |
| 339 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 340 | Blank line used to separate logical code sections. |
| 341 | Defines an arrow-function callback. |
| 342 | Begins a conditional branch. |
| 343 | Uses a browser DOM/window/navigation API. |
| 344 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 345 | Uses a browser DOM/window/navigation API. |
| 346 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 347 | Uses a browser DOM/window/navigation API. |
| 348 | Closes the current block/object/function. |
| 349 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 350 | Closes the current block/object/function. |
| 351 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 352 | Blank line used to separate logical code sections. |
| 353 | Comment only. It does not execute. |
| 354 | Begins a conditional branch. |
| 355 | Starts a repeating timer. |
| 356 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 357 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 358 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 359 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 360 | Closes the current block/object/function. |
| 361 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 362 | Invokes a function or method. |
| 363 | Returns a value and exits the current function. |
| 364 | Closes the current block/object/function. |
| 365 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 366 | Blank line used to separate logical code sections. |
| 367 | Closes the current block/object/function. |
| 368 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 369 | Defines object method checkFcm; it operates on the containing object's state. |
| 370 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 371 | Begins a conditional branch. |
| 372 | Defines an arrow-function callback. |
| 373 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 374 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 375 | Closes the current block/object/function. |
| 376 | Closes the current block/object/function. |
| 377 | Defines object method checkLoginResult; it operates on the containing object's state. |
| 378 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 379 | Begins a conditional branch. |
| 380 | Defines an arrow-function callback. |
| 381 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 382 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 383 | Returns a value and exits the current function. |
| 384 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 385 | Uses jQuery. |
| 386 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 387 | Closes the current block/object/function. |
| 388 | Returns a value and exits the current function. |
| 389 | Closes the current block/object/function. |
| 390 | Defines object method getTime; it operates on the containing object's state. |
| 391 | Returns a value and exits the current function. |
| 392 | Closes the current block/object/function. |
| 393 | Defines object method deK; it operates on the containing object's state. |
| 394 | URL-encodes or decodes data. |
| 395 | Begins iteration. |
| 396 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 397 | Returns a value and exits the current function. |
| 398 | Closes the current block/object/function. |
| 399 | Defines object method getCG; it operates on the containing object's state. |
| 400 | Serializes or deserializes JSON. |
| 401 | Returns a value and exits the current function. |
| 402 | Closes the current block/object/function. |
| 403 | Defines object method sortObject; it operates on the containing object's state. |
| 404 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 405 | Begins iteration. |
| 406 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 407 | Begins iteration. |
| 408 | Assigns a value to a variable or object property. |
| 409 | Assigns a value to a variable or object property. |
| 410 | Returns a value and exits the current function. |
| 411 | Closes the current block/object/function. |
| 412 | Defines object method getSign; it operates on the containing object's state. |
| 413 | Assigns a value to a variable or object property. |
| 414 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 415 | Comment only. It does not execute. |
| 416 | Returns a value and exits the current function. |
| 417 | Closes the current block/object/function. |
| 418 | Defines object method getBaseParams; it operates on the containing object's state. |
| 419 | Returns a value and exits the current function. |
| 420 | Closes the current block/object/function. |
| 421 | Defines object method getLocalParams; it operates on the containing object's state. |
| 422 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 423 | Returns a value and exits the current function. |
| 424 | Closes the current block/object/function. |
| 425 | Defines object method setLocalParams; it operates on the containing object's state. |
| 426 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 427 | Assigns a value to a variable or object property. |
| 428 | Reads or writes browser localStorage. |
| 429 | Closes the current block/object/function. |
| 430 | Defines object method removeLocalParams; it operates on the containing object's state. |
| 431 | Reads or writes browser localStorage. |
| 432 | Reads or writes browser localStorage. |
| 433 | Reads or writes browser localStorage. |
| 434 | Reads or writes browser localStorage. |
| 435 | Reads or writes browser localStorage. |
| 436 | Reads or writes browser localStorage. |
| 437 | Closes the current block/object/function. |
| 438 | Defines object method isIOS; it operates on the containing object's state. |
| 439 | Uses a browser DOM/window/navigation API. |
| 440 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 441 | Returns a value and exits the current function. |
| 442 | Closes the current block/object/function. |
| 443 | Defines object method isAndroid; it operates on the containing object's state. |
| 444 | Uses a browser DOM/window/navigation API. |
| 445 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 446 | Returns a value and exits the current function. |
| 447 | Closes the current block/object/function. |
| 448 | Blank line used to separate logical code sections. |
| 449 | Defines object method init; it operates on the containing object's state. |
| 450 | Comment only. It does not execute. |
| 451 | Registers a browser/runtime event listener. |
| 452 | Comment only. It does not execute. |
| 453 | Begins a conditional branch. |
| 454 | Blank line used to separate logical code sections. |
| 455 | Comment only. It does not execute. |
| 456 | Begins a conditional branch. |
| 457 | Comment only. It does not execute. |
| 458 | Uses a browser DOM/window/navigation API. |
| 459 | Sends a cross-window message used by the SDK/game bridge. |
| 460 | Uses a browser DOM/window/navigation API. |
| 461 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 462 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 463 | Closes the current block/object/function. |
| 464 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 465 | Blank line used to separate logical code sections. |
| 466 | Begins a conditional branch. |
| 467 | Writes diagnostic information to the console. |
| 468 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 469 | Returns a value and exits the current function. |
| 470 | Closes the current block/object/function. |
| 471 | Blank line used to separate logical code sections. |
| 472 | Comment only. It does not execute. |
| 473 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 474 | Blank line used to separate logical code sections. |
| 475 | Comment only. It does not execute. |
| 476 | Comment only. It does not execute. |
| 477 | Comment only. It does not execute. |
| 478 | Comment only. It does not execute. |
| 479 | Comment only. It does not execute. |
| 480 | Comment only. It does not execute. |
| 481 | Comment only. It does not execute. |
| 482 | Comment only. It does not execute. |
| 483 | Comment only. It does not execute. |
| 484 | Blank line used to separate logical code sections. |
| 485 | Comment only. It does not execute. |
| 486 | Blank line used to separate logical code sections. |
| 487 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 488 | Blank line used to separate logical code sections. |
| 489 | Begins exception handling. |
| 490 | Comment only. It does not execute. |
| 491 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 492 | Blank line used to separate logical code sections. |
| 493 | Comment only. It does not execute. |
| 494 | Begins a conditional branch. |
| 495 | Assigns a value to a variable or object property. |
| 496 | Assigns a value to a variable or object property. |
| 497 | Assigns a value to a variable or object property. |
| 498 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 499 | Writes diagnostic information to the console. |
| 500 | Invokes a function or method. |
| 501 | Returns a value and exits the current function. |
| 502 | Closes the current block/object/function. |
| 503 | Blank line used to separate logical code sections. |
| 504 | Comment only. It does not execute. |
| 505 | Comment only. It does not execute. |
| 506 | Begins a conditional branch. |
| 507 | Comment only. It does not execute. |
| 508 | Begins a conditional branch. |
| 509 | Invokes a function or method. |
| 510 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 511 | Invokes a function or method. |
| 512 | Closes the current block/object/function. |
| 513 | Returns a value and exits the current function. |
| 514 | Closes the current block/object/function. |
| 515 | Blank line used to separate logical code sections. |
| 516 | Comment only. It does not execute. |
| 517 | Comment only. It does not execute. |
| 518 | Blank line used to separate logical code sections. |
| 519 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 520 | Assigns a value to a variable or object property. |
| 521 | Begins a conditional branch. |
| 522 | Assigns a value to a variable or object property. |
| 523 | Begins a conditional branch. |
| 524 | Assigns a value to a variable or object property. |
| 525 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 526 | Closes the current block/object/function. |
| 527 | Closes the current block/object/function. |
| 528 | Blank line used to separate logical code sections. |
| 529 | Assigns a value to a variable or object property. |
| 530 | Assigns a value to a variable or object property. |
| 531 | Assigns a value to a variable or object property. |
| 532 | Assigns a value to a variable or object property. |
| 533 | Assigns a value to a variable or object property. |
| 534 | Begins a conditional branch. |
| 535 | Assigns a value to a variable or object property. |
| 536 | Closes the current block/object/function. |
| 537 | Begins a conditional branch. |
| 538 | Assigns a value to a variable or object property. |
| 539 | Closes the current block/object/function. |
| 540 | Blank line used to separate logical code sections. |
| 541 | Assigns a value to a variable or object property. |
| 542 | Assigns a value to a variable or object property. |
| 543 | URL-encodes or decodes data. |
| 544 | Assigns a value to a variable or object property. |
| 545 | Assigns a value to a variable or object property. |
| 546 | Assigns a value to a variable or object property. |
| 547 | Assigns a value to a variable or object property. |
| 548 | Assigns a value to a variable or object property. |
| 549 | Assigns a value to a variable or object property. |
| 550 | Comment only. It does not execute. |
| 551 | Comment only. It does not execute. |
| 552 | Comment only. It does not execute. |
| 553 | Comment only. It does not execute. |
| 554 | Comment only. It does not execute. |
| 555 | Blank line used to separate logical code sections. |
| 556 | Begins a conditional branch. |
| 557 | Begins a conditional branch. |
| 558 | Assigns a value to a variable or object property. |
| 559 | Closes the current block/object/function. |
| 560 | Closes the current block/object/function. |
| 561 | Blank line used to separate logical code sections. |
| 562 | Blank line used to separate logical code sections. |
| 563 | Defines an arrow-function callback. |
| 564 | Assigns a value to a variable or object property. |
| 565 | Comment only. It does not execute. |
| 566 | Uses a browser DOM/window/navigation API. |
| 567 | Uses a browser DOM/window/navigation API. |
| 568 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 569 | Uses a browser DOM/window/navigation API. |
| 570 | Begins a conditional branch. |
| 571 | Uses a browser DOM/window/navigation API. |
| 572 | Closes the current block/object/function. |
| 573 | Comment only. It does not execute. |
| 574 | Closes the current block/object/function. |
| 575 | Blank line used to separate logical code sections. |
| 576 | Defines an arrow-function callback. |
| 577 | Assigns a value to a variable or object property. |
| 578 | Comment only. It does not execute. |
| 579 | Uses a browser DOM/window/navigation API. |
| 580 | Schedules delayed execution. |
| 581 | Comment only. It does not execute. |
| 582 | Begins a conditional branch. |
| 583 | Comment only. It does not execute. |
| 584 | Uses a browser DOM/window/navigation API. |
| 585 | Closes the current block/object/function. |
| 586 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 587 | Closes the current block/object/function. |
| 588 | Blank line used to separate logical code sections. |
| 589 | Defines an arrow-function callback. |
| 590 | Uses a browser DOM/window/navigation API. |
| 591 | Begins a conditional branch. |
| 592 | Uses a browser DOM/window/navigation API. |
| 593 | Assigns a value to a variable or object property. |
| 594 | Closes the current block/object/function. |
| 595 | Closes the current block/object/function. |
| 596 | Blank line used to separate logical code sections. |
| 597 | Registers a browser/runtime event listener. |
| 598 | Registers a browser/runtime event listener. |
| 599 | Blank line used to separate logical code sections. |
| 600 | Comment only. It does not execute. |
| 601 | Comment only. It does not execute. |
| 602 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 603 | Blank line used to separate logical code sections. |
| 604 | Blank line used to separate logical code sections. |
| 605 | Comment only. It does not execute. |
| 606 | Uses a browser DOM/window/navigation API. |
| 607 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 608 | Assigns a value to a variable or object property. |
| 609 | Assigns a value to a variable or object property. |
| 610 | Assigns a value to a variable or object property. |
| 611 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 612 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 613 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 614 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 615 | Blank line used to separate logical code sections. |
| 616 | Blank line used to separate logical code sections. |
| 617 | Uses a browser DOM/window/navigation API. |
| 618 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 619 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 620 | Blank line used to separate logical code sections. |
| 621 | Comment only. It does not execute. |
| 622 | Comment only. It does not execute. |
| 623 | Comment only. It does not execute. |
| 624 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 625 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 626 | Begins a conditional branch. |
| 627 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 628 | Comment only. It does not execute. |
| 629 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 630 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 631 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 632 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 633 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 634 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 635 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 636 | Comment only. It does not execute. |
| 637 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 638 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 639 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 640 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 641 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 642 | Closes the current block/object/function. |
| 643 | Closes the current block/object/function. |
| 644 | Blank line used to separate logical code sections. |
| 645 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 646 | Begins a conditional branch. |
| 647 | Assigns a value to a variable or object property. |
| 648 | Assigns a value to a variable or object property. |
| 649 | Assigns a value to a variable or object property. |
| 650 | Assigns a value to a variable or object property. |
| 651 | Assigns a value to a variable or object property. |
| 652 | Assigns a value to a variable or object property. |
| 653 | Assigns a value to a variable or object property. |
| 654 | Assigns a value to a variable or object property. |
| 655 | Blank line used to separate logical code sections. |
| 656 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 657 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 658 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 659 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 660 | Blank line used to separate logical code sections. |
| 661 | Begins a conditional branch. |
| 662 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 663 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 664 | Invokes a function or method. |
| 665 | Closes the current block/object/function. |
| 666 | Blank line used to separate logical code sections. |
| 667 | Begins a conditional branch. |
| 668 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 669 | Closes the current block/object/function. |
| 670 | Blank line used to separate logical code sections. |
| 671 | Begins a conditional branch. |
| 672 | Begins exception handling. |
| 673 | Comment only. It does not execute. |
| 674 | Uses a browser DOM/window/navigation API. |
| 675 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 676 | Comment only. It does not execute. |
| 677 | Writes diagnostic information to the console. |
| 678 | Closes the current block/object/function. |
| 679 | Closes the current block/object/function. |
| 680 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 681 | Invokes a function or method. |
| 682 | Returns a value and exits the current function. |
| 683 | Closes the current block/object/function. |
| 684 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 685 | Blank line used to separate logical code sections. |
| 686 | Comment only. It does not execute. |
| 687 | Begins a conditional branch. |
| 688 | Sends a cross-window message used by the SDK/game bridge. |
| 689 | Closes the current block/object/function. |
| 690 | Blank line used to separate logical code sections. |
| 691 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 692 | Comment only. It does not execute. |
| 693 | Writes diagnostic information to the console. |
| 694 | Comment only. It does not execute. |
| 695 | Returns a value and exits the current function. |
| 696 | Closes the current block/object/function. |
| 697 | Closes the current block/object/function. |
| 698 | Blank line used to separate logical code sections. |
| 699 | Comment only. It does not execute. |
| 700 | Comment only. It does not execute. |
| 701 | Blank line used to separate logical code sections. |
| 702 | Comment only. It does not execute. |
| 703 | Invokes a function or method. |
| 704 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 705 | Comment only. It does not execute. |
| 706 | Defines an arrow-function callback. |
| 707 | Comment only. It does not execute. |
| 708 | Defines an arrow-function callback. |
| 709 | Comment only. It does not execute. |
| 710 | Begins a conditional branch. |
| 711 | Comment only. It does not execute. |
| 712 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 713 | Closes the current block/object/function. |
| 714 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 715 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 716 | Blank line used to separate logical code sections. |
| 717 | Comment only. It does not execute. |
| 718 | Uses a browser DOM/window/navigation API. |
| 719 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 720 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 721 | Comment only. It does not execute. |
| 722 | Comment only. It does not execute. |
| 723 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 724 | Closes the current block/object/function. |
| 725 | Blank line used to separate logical code sections. |
| 726 | Comment only. It does not execute. |
| 727 | Invokes a function or method. |
| 728 | Comment only. It does not execute. |
| 729 | Defines an arrow-function callback. |
| 730 | Comment only. It does not execute. |
| 731 | Begins a conditional branch. |
| 732 | Writes diagnostic information to the console. |
| 733 | Comment only. It does not execute. |
| 734 | Closes the current block/object/function. |
| 735 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 736 | Closes the current block/object/function. |
| 737 | Blank line used to separate logical code sections. |
| 738 | Comment only. It does not execute. |
| 739 | Invokes a function or method. |
| 740 | Begins a conditional branch. |
| 741 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 742 | Assigns a value to a variable or object property. |
| 743 | Closes the current block/object/function. |
| 744 | Closes the current block/object/function. |
| 745 | Blank line used to separate logical code sections. |
| 746 | Blank line used to separate logical code sections. |
| 747 | Defines object method uuid; it operates on the containing object's state. |
| 748 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 749 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 750 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 751 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 752 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 753 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 754 | Assigns a value to a variable or object property. |
| 755 | Blank line used to separate logical code sections. |
| 756 | Begins a conditional branch. |
| 757 | Begins iteration. |
| 758 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 759 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 760 | Blank line used to separate logical code sections. |
| 761 | Assigns a value to a variable or object property. |
| 762 | Assigns a value to a variable or object property. |
| 763 | Blank line used to separate logical code sections. |
| 764 | Begins iteration. |
| 765 | Begins a conditional branch. |
| 766 | Assigns a value to a variable or object property. |
| 767 | Assigns a value to a variable or object property. |
| 768 | Closes the current block/object/function. |
| 769 | Closes the current block/object/function. |
| 770 | Closes the current block/object/function. |
| 771 | Returns a value and exits the current function. |
| 772 | Closes the current block/object/function. |
| 773 | Block-comment text. It does not execute. |
| 774 | Defines object method checkFcmOpenAction; it operates on the containing object's state. |
| 775 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 776 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 777 | Assigns a value to a variable or object property. |
| 778 | Assigns a value to a variable or object property. |
| 779 | Starts a jQuery AJAX request. |
| 780 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 781 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 782 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 783 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 784 | Defines object method success; it operates on the containing object's state. |
| 785 | Invokes a function or method. |
| 786 | Closes the current block/object/function. |
| 787 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 788 | Closes the current block/object/function. |
| 789 | Blank line used to separate logical code sections. |
| 790 | Defines object method detectAction; it operates on the containing object's state. |
| 791 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 792 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 793 | Assigns a value to a variable or object property. |
| 794 | Assigns a value to a variable or object property. |
| 795 | Starts a jQuery AJAX request. |
| 796 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 797 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 798 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 799 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 800 | Defines object method success; it operates on the containing object's state. |
| 801 | Invokes a function or method. |
| 802 | Closes the current block/object/function. |
| 803 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 804 | Closes the current block/object/function. |
| 805 | Blank line used to separate logical code sections. |
| 806 | Defines object method activeAction; it operates on the containing object's state. |
| 807 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 808 | Assigns a value to a variable or object property. |
| 809 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 810 | Assigns a value to a variable or object property. |
| 811 | Assigns a value to a variable or object property. |
| 812 | Starts a jQuery AJAX request. |
| 813 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 814 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 815 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 816 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 817 | Defines object method success; it operates on the containing object's state. |
| 818 | Begins a conditional branch. |
| 819 | Comment only. It does not execute. |
| 820 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 821 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 822 | Blank line used to separate logical code sections. |
| 823 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 824 | Blank line used to separate logical code sections. |
| 825 | Comment only. It does not execute. |
| 826 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 827 | Uses jQuery. |
| 828 | Blank line used to separate logical code sections. |
| 829 | Begins a conditional branch. |
| 830 | Comment only. It does not execute. |
| 831 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 832 | Uses jQuery. |
| 833 | Closes the current block/object/function. |
| 834 | Begins a conditional branch. |
| 835 | Comment only. It does not execute. |
| 836 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 837 | Uses jQuery. |
| 838 | Closes the current block/object/function. |
| 839 | Closes the current block/object/function. |
| 840 | Invokes a function or method. |
| 841 | Closes the current block/object/function. |
| 842 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 843 | Closes the current block/object/function. |
| 844 | Defines object method getAnnouncement; it operates on the containing object's state. |
| 845 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 846 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 847 | Assigns a value to a variable or object property. |
| 848 | Starts a jQuery AJAX request. |
| 849 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 850 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 851 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 852 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 853 | Defines object method success; it operates on the containing object's state. |
| 854 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 855 | Closes the current block/object/function. |
| 856 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 857 | Closes the current block/object/function. |
| 858 | Defines object method randomAccount; it operates on the containing object's state. |
| 859 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 860 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 861 | Assigns a value to a variable or object property. |
| 862 | Starts a jQuery AJAX request. |
| 863 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 864 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 865 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 866 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 867 | Defines object method success; it operates on the containing object's state. |
| 868 | Invokes a function or method. |
| 869 | Closes the current block/object/function. |
| 870 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 871 | Closes the current block/object/function. |
| 872 | Defines object method pwdLoginAction; it operates on the containing object's state. |
| 873 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 874 | Assigns a value to a variable or object property. |
| 875 | Assigns a value to a variable or object property. |
| 876 | Assigns a value to a variable or object property. |
| 877 | Assigns a value to a variable or object property. |
| 878 | Starts a jQuery AJAX request. |
| 879 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 880 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 881 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 882 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 883 | Defines object method success; it operates on the containing object's state. |
| 884 | Writes diagnostic information to the console. |
| 885 | Invokes a function or method. |
| 886 | Closes the current block/object/function. |
| 887 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 888 | Closes the current block/object/function. |
| 889 | Defines object method quickRegAction; it operates on the containing object's state. |
| 890 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 891 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 892 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 893 | Assigns a value to a variable or object property. |
| 894 | Assigns a value to a variable or object property. |
| 895 | Assigns a value to a variable or object property. |
| 896 | Assigns a value to a variable or object property. |
| 897 | Assigns a value to a variable or object property. |
| 898 | Starts a jQuery AJAX request. |
| 899 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 900 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 901 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 902 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 903 | Defines object method success; it operates on the containing object's state. |
| 904 | Writes diagnostic information to the console. |
| 905 | Begins a conditional branch. |
| 906 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 907 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 908 | Closes the current block/object/function. |
| 909 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 910 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 911 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 912 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 913 | Closes the current block/object/function. |
| 914 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 915 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 916 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 917 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 918 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 919 | Closes the current block/object/function. |
| 920 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 921 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 922 | Invokes a function or method. |
| 923 | Closes the current block/object/function. |
| 924 | Invokes a function or method. |
| 925 | Closes the current block/object/function. |
| 926 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 927 | Closes the current block/object/function. |
| 928 | Comment only. It does not execute. |
| 929 | Comment only. It does not execute. |
| 930 | Comment only. It does not execute. |
| 931 | Comment only. It does not execute. |
| 932 | Comment only. It does not execute. |
| 933 | Comment only. It does not execute. |
| 934 | Comment only. It does not execute. |
| 935 | Comment only. It does not execute. |
| 936 | Comment only. It does not execute. |
| 937 | Comment only. It does not execute. |
| 938 | Comment only. It does not execute. |
| 939 | Comment only. It does not execute. |
| 940 | Comment only. It does not execute. |
| 941 | Comment only. It does not execute. |
| 942 | Comment only. It does not execute. |
| 943 | Comment only. It does not execute. |
| 944 | Comment only. It does not execute. |
| 945 | Comment only. It does not execute. |
| 946 | Comment only. It does not execute. |
| 947 | Defines object method emailRegAction; it operates on the containing object's state. |
| 948 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 949 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 950 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 951 | Assigns a value to a variable or object property. |
| 952 | Assigns a value to a variable or object property. |
| 953 | Assigns a value to a variable or object property. |
| 954 | Assigns a value to a variable or object property. |
| 955 | Assigns a value to a variable or object property. |
| 956 | Assigns a value to a variable or object property. |
| 957 | Starts a jQuery AJAX request. |
| 958 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 959 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 960 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 961 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 962 | Defines object method success; it operates on the containing object's state. |
| 963 | Writes diagnostic information to the console. |
| 964 | Begins a conditional branch. |
| 965 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 966 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 967 | Closes the current block/object/function. |
| 968 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 969 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 970 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 971 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 972 | Closes the current block/object/function. |
| 973 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 974 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 975 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 976 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 977 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 978 | Closes the current block/object/function. |
| 979 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 980 | Invokes a function or method. |
| 981 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 982 | Invokes a function or method. |
| 983 | Closes the current block/object/function. |
| 984 | Closes the current block/object/function. |
| 985 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 986 | Closes the current block/object/function. |
| 987 | Comment only. It does not execute. |
| 988 | Comment only. It does not execute. |
| 989 | Comment only. It does not execute. |
| 990 | Comment only. It does not execute. |
| 991 | Comment only. It does not execute. |
| 992 | Comment only. It does not execute. |
| 993 | Comment only. It does not execute. |
| 994 | Comment only. It does not execute. |
| 995 | Comment only. It does not execute. |
| 996 | Comment only. It does not execute. |
| 997 | Comment only. It does not execute. |
| 998 | Comment only. It does not execute. |
| 999 | Comment only. It does not execute. |
| 1000 | Comment only. It does not execute. |
| 1001 | Comment only. It does not execute. |
| 1002 | Comment only. It does not execute. |
| 1003 | Comment only. It does not execute. |
| 1004 | Comment only. It does not execute. |
| 1005 | Defines object method sendCode; it operates on the containing object's state. |
| 1006 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1007 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1008 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1009 | Assigns a value to a variable or object property. |
| 1010 | Assigns a value to a variable or object property. |
| 1011 | Assigns a value to a variable or object property. |
| 1012 | Assigns a value to a variable or object property. |
| 1013 | Starts a jQuery AJAX request. |
| 1014 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1015 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1016 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1017 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1018 | Defines object method success; it operates on the containing object's state. |
| 1019 | Writes diagnostic information to the console. |
| 1020 | Invokes a function or method. |
| 1021 | Closes the current block/object/function. |
| 1022 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1023 | Closes the current block/object/function. |
| 1024 | Defines object method roleAction; it operates on the containing object's state. |
| 1025 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1026 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1027 | Assigns a value to a variable or object property. |
| 1028 | Assigns a value to a variable or object property. |
| 1029 | Assigns a value to a variable or object property. |
| 1030 | Assigns a value to a variable or object property. |
| 1031 | Assigns a value to a variable or object property. |
| 1032 | Assigns a value to a variable or object property. |
| 1033 | Assigns a value to a variable or object property. |
| 1034 | Assigns a value to a variable or object property. |
| 1035 | Starts a jQuery AJAX request. |
| 1036 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1037 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1038 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1039 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1040 | Defines object method success; it operates on the containing object's state. |
| 1041 | Closes the current block/object/function. |
| 1042 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1043 | Closes the current block/object/function. |
| 1044 | Block-comment text. It does not execute. |
| 1045 | Defines object method logoutFromGame; it operates on the containing object's state. |
| 1046 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1047 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1048 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1049 | Assigns a value to a variable or object property. |
| 1050 | Assigns a value to a variable or object property. |
| 1051 | Assigns a value to a variable or object property. |
| 1052 | Starts a jQuery AJAX request. |
| 1053 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1054 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1055 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1056 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1057 | Defines object method success; it operates on the containing object's state. |
| 1058 | Reads or writes browser localStorage. |
| 1059 | Begins a conditional branch. |
| 1060 | Uses jQuery. |
| 1061 | Uses jQuery. |
| 1062 | Closes the current block/object/function. |
| 1063 | Blank line used to separate logical code sections. |
| 1064 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1065 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1066 | Uses a browser DOM/window/navigation API. |
| 1067 | Closes the current block/object/function. |
| 1068 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1069 | Closes the current block/object/function. |
| 1070 | Defines object method hideBuoy; it operates on the containing object's state. |
| 1071 | Uses a browser DOM/window/navigation API. |
| 1072 | Begins a conditional branch. |
| 1073 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1074 | Closes the current block/object/function. |
| 1075 | Closes the current block/object/function. |
| 1076 | Defines object method accountDelete; it operates on the containing object's state. |
| 1077 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1078 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1079 | Invokes a function or method. |
| 1080 | Invokes a function or method. |
| 1081 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1082 | Closes the current block/object/function. |
| 1083 | Defines object method logout; it operates on the containing object's state. |
| 1084 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1085 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1086 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1087 | Assigns a value to a variable or object property. |
| 1088 | Assigns a value to a variable or object property. |
| 1089 | Invokes a function or method. |
| 1090 | Starts a jQuery AJAX request. |
| 1091 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1092 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1093 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1094 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1095 | Defines object method success; it operates on the containing object's state. |
| 1096 | Reads or writes browser localStorage. |
| 1097 | Begins a conditional branch. |
| 1098 | Uses jQuery. |
| 1099 | Uses jQuery. |
| 1100 | Invokes a function or method. |
| 1101 | Closes the current block/object/function. |
| 1102 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1103 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1104 | Comment only. It does not execute. |
| 1105 | Uses a browser DOM/window/navigation API. |
| 1106 | Closes the current block/object/function. |
| 1107 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1108 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1109 | Closes the current block/object/function. |
| 1110 | Defines object method forceLogout; it operates on the containing object's state. |
| 1111 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1112 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1113 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1114 | Assigns a value to a variable or object property. |
| 1115 | Assigns a value to a variable or object property. |
| 1116 | Starts a jQuery AJAX request. |
| 1117 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1118 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1119 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1120 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1121 | Defines object method success; it operates on the containing object's state. |
| 1122 | Reads or writes browser localStorage. |
| 1123 | Begins a conditional branch. |
| 1124 | Uses jQuery. |
| 1125 | Uses jQuery. |
| 1126 | Invokes a function or method. |
| 1127 | Closes the current block/object/function. |
| 1128 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1129 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1130 | Uses a browser DOM/window/navigation API. |
| 1131 | Closes the current block/object/function. |
| 1132 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1133 | Closes the current block/object/function. |
| 1134 | Blank line used to separate logical code sections. |
| 1135 | Defines object method bindEmailAction; it operates on the containing object's state. |
| 1136 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1137 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1138 | Assigns a value to a variable or object property. |
| 1139 | Assigns a value to a variable or object property. |
| 1140 | Assigns a value to a variable or object property. |
| 1141 | Assigns a value to a variable or object property. |
| 1142 | Assigns a value to a variable or object property. |
| 1143 | Starts a jQuery AJAX request. |
| 1144 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1145 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1146 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1147 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1148 | Defines object method success; it operates on the containing object's state. |
| 1149 | Writes diagnostic information to the console. |
| 1150 | Invokes a function or method. |
| 1151 | Closes the current block/object/function. |
| 1152 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1153 | Closes the current block/object/function. |
| 1154 | Defines object method resetPwdAction; it operates on the containing object's state. |
| 1155 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1156 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1157 | Assigns a value to a variable or object property. |
| 1158 | Assigns a value to a variable or object property. |
| 1159 | Assigns a value to a variable or object property. |
| 1160 | Assigns a value to a variable or object property. |
| 1161 | Blank line used to separate logical code sections. |
| 1162 | Starts a jQuery AJAX request. |
| 1163 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1164 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1165 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1166 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1167 | Defines object method success; it operates on the containing object's state. |
| 1168 | Begins a conditional branch. |
| 1169 | Invokes a function or method. |
| 1170 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1171 | Invokes a function or method. |
| 1172 | Closes the current block/object/function. |
| 1173 | Blank line used to separate logical code sections. |
| 1174 | Closes the current block/object/function. |
| 1175 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1176 | Closes the current block/object/function. |
| 1177 | Defines object method rePwdAction; it operates on the containing object's state. |
| 1178 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1179 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1180 | Assigns a value to a variable or object property. |
| 1181 | Assigns a value to a variable or object property. |
| 1182 | Assigns a value to a variable or object property. |
| 1183 | Assigns a value to a variable or object property. |
| 1184 | Assigns a value to a variable or object property. |
| 1185 | Starts a jQuery AJAX request. |
| 1186 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1187 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1188 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1189 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1190 | Defines object method success; it operates on the containing object's state. |
| 1191 | Writes diagnostic information to the console. |
| 1192 | Invokes a function or method. |
| 1193 | Closes the current block/object/function. |
| 1194 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1195 | Closes the current block/object/function. |
| 1196 | Defines object method replacePackage; it operates on the containing object's state. |
| 1197 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1198 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1199 | Assigns a value to a variable or object property. |
| 1200 | Assigns a value to a variable or object property. |
| 1201 | Assigns a value to a variable or object property. |
| 1202 | Assigns a value to a variable or object property. |
| 1203 | Starts a jQuery AJAX request. |
| 1204 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1205 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1206 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1207 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1208 | Defines object method success; it operates on the containing object's state. |
| 1209 | Invokes a function or method. |
| 1210 | Closes the current block/object/function. |
| 1211 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1212 | Closes the current block/object/function. |
| 1213 | Defines object method languageAction; it operates on the containing object's state. |
| 1214 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1215 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1216 | Assigns a value to a variable or object property. |
| 1217 | Assigns a value to a variable or object property. |
| 1218 | Blank line used to separate logical code sections. |
| 1219 | Begins a conditional branch. |
| 1220 | Begins a conditional branch. |
| 1221 | Assigns a value to a variable or object property. |
| 1222 | Closes the current block/object/function. |
| 1223 | Closes the current block/object/function. |
| 1224 | Blank line used to separate logical code sections. |
| 1225 | Comment only. It does not execute. |
| 1226 | Returns a value and exits the current function. |
| 1227 | Starts a jQuery AJAX request. |
| 1228 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1229 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1230 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1231 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1232 | Defines object method success; it operates on the containing object's state. |
| 1233 | Invokes a function or method. |
| 1234 | Closes the current block/object/function. |
| 1235 | Defines object method error; it operates on the containing object's state. |
| 1236 | Invokes a function or method. |
| 1237 | Closes the current block/object/function. |
| 1238 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1239 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1240 | Closes the current block/object/function. |
| 1241 | Blank line used to separate logical code sections. |
| 1242 | Defines object method getSDKLanguage; it operates on the containing object's state. |
| 1243 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1244 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1245 | Closes the current block/object/function. |
| 1246 | Invokes a function or method. |
| 1247 | Closes the current block/object/function. |
| 1248 | Blank line used to separate logical code sections. |
| 1249 | Block-comment text. It does not execute. |
| 1250 | Blank line used to separate logical code sections. |
| 1251 | Block-comment text. It does not execute. |
| 1252 | Defines object method showPopover; it operates on the containing object's state. |
| 1253 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1254 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1255 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1256 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1257 | Uses jQuery. |
| 1258 | Uses jQuery. |
| 1259 | Comment only. It does not execute. |
| 1260 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1261 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1262 | Closes the current block/object/function. |
| 1263 | Defines object method commentPopover; it operates on the containing object's state. |
| 1264 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1265 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1266 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1267 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1268 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1269 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1270 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1271 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1272 | Uses jQuery. |
| 1273 | Blank line used to separate logical code sections. |
| 1274 | Uses a browser DOM/window/navigation API. |
| 1275 | Uses a browser DOM/window/navigation API. |
| 1276 | Uses a browser DOM/window/navigation API. |
| 1277 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1278 | Blank line used to separate logical code sections. |
| 1279 | Registers a browser/runtime event listener. |
| 1280 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1281 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1282 | Blank line used to separate logical code sections. |
| 1283 | Uses jQuery. |
| 1284 | Comment only. It does not execute. |
| 1285 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1286 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1287 | Comment only. It does not execute. |
| 1288 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1289 | Uses a browser DOM/window/navigation API. |
| 1290 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1291 | Closes the current block/object/function. |
| 1292 | Defines object method codePopover; it operates on the containing object's state. |
| 1293 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1294 | Blank line used to separate logical code sections. |
| 1295 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1296 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1297 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1298 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1299 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1300 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1301 | Uses jQuery. |
| 1302 | Blank line used to separate logical code sections. |
| 1303 | Uses a browser DOM/window/navigation API. |
| 1304 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1305 | Uses a browser DOM/window/navigation API. |
| 1306 | Blank line used to separate logical code sections. |
| 1307 | Registers a browser/runtime event listener. |
| 1308 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1309 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1310 | Blank line used to separate logical code sections. |
| 1311 | Uses jQuery. |
| 1312 | Uses a browser DOM/window/navigation API. |
| 1313 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1314 | Closes the current block/object/function. |
| 1315 | Defines object method showGameAnnoun; it operates on the containing object's state. |
| 1316 | Uses a browser DOM/window/navigation API. |
| 1317 | Uses a browser DOM/window/navigation API. |
| 1318 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1319 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1320 | Comment only. It does not execute. |
| 1321 | Begins a conditional branch. |
| 1322 | Assigns a value to a variable or object property. |
| 1323 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1324 | Assigns a value to a variable or object property. |
| 1325 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1326 | Assigns a value to a variable or object property. |
| 1327 | Closes the current block/object/function. |
| 1328 | Blank line used to separate logical code sections. |
| 1329 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1330 | Blank line used to separate logical code sections. |
| 1331 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1332 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1333 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1334 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1335 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1336 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1337 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1338 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1339 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1340 | Uses jQuery. |
| 1341 | Begins a conditional branch. |
| 1342 | Comment only. It does not execute. |
| 1343 | Uses jQuery. |
| 1344 | Uses jQuery. |
| 1345 | Uses jQuery. |
| 1346 | Closes the current block/object/function. |
| 1347 | Begins a conditional branch. |
| 1348 | Uses jQuery. |
| 1349 | Closes the current block/object/function. |
| 1350 | Begins a conditional branch. |
| 1351 | Uses jQuery. |
| 1352 | Uses jQuery. |
| 1353 | Uses jQuery. |
| 1354 | Uses jQuery. |
| 1355 | Uses jQuery. |
| 1356 | Uses jQuery. |
| 1357 | Uses jQuery. |
| 1358 | Uses jQuery. |
| 1359 | Uses jQuery. |
| 1360 | Uses jQuery. |
| 1361 | Uses jQuery. |
| 1362 | Closes the current block/object/function. |
| 1363 | Uses jQuery. |
| 1364 | Uses jQuery. |
| 1365 | Comment only. It does not execute. |
| 1366 | Returns a value and exits the current function. |
| 1367 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1368 | Closes the current block/object/function. |
| 1369 | Defines object method drawCollect; it operates on the containing object's state. |
| 1370 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1371 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1372 | Begins a conditional branch. |
| 1373 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1374 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1375 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1376 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1377 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1378 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1379 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1380 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1381 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1382 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1383 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1384 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1385 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1386 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1387 | Uses jQuery. |
| 1388 | Uses jQuery. |
| 1389 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1390 | Uses jQuery. |
| 1391 | Closes the current block/object/function. |
| 1392 | Begins a conditional branch. |
| 1393 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1394 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1395 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1396 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1397 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1398 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1399 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1400 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1401 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1402 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1403 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1404 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1405 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1406 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1407 | Uses jQuery. |
| 1408 | Uses jQuery. |
| 1409 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1410 | Uses jQuery. |
| 1411 | Closes the current block/object/function. |
| 1412 | Blank line used to separate logical code sections. |
| 1413 | Closes the current block/object/function. |
| 1414 | Defines object method drawLogin; it operates on the containing object's state. |
| 1415 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1416 | Uses jQuery. |
| 1417 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1418 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1419 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1420 | Blank line used to separate logical code sections. |
| 1421 | Comment only. It does not execute. |
| 1422 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1423 | Begins a conditional branch. |
| 1424 | Begins a conditional branch. |
| 1425 | Assigns a value to a variable or object property. |
| 1426 | Assigns a value to a variable or object property. |
| 1427 | Closes the current block/object/function. |
| 1428 | Closes the current block/object/function. |
| 1429 | Blank line used to separate logical code sections. |
| 1430 | Comment only. It does not execute. |
| 1431 | Comment only. It does not execute. |
| 1432 | Begins a conditional branch. |
| 1433 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1434 | Begins a conditional branch. |
| 1435 | Defines an arrow-function callback. |
| 1436 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1437 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1438 | Closes the current block/object/function. |
| 1439 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1440 | Blank line used to separate logical code sections. |
| 1441 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1442 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1443 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1444 | Blank line used to separate logical code sections. |
| 1445 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1446 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1447 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1448 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1449 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1450 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1451 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1452 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1453 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1454 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1455 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1456 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1457 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1458 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1459 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1460 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1461 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1462 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1463 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1464 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1465 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1466 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1467 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1468 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1469 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1470 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1471 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1472 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1473 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1474 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1475 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1476 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1477 | Blank line used to separate logical code sections. |
| 1478 | Uses jQuery. |
| 1479 | Uses jQuery. |
| 1480 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1481 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1482 | Defines an arrow-function callback. |
| 1483 | Begins a conditional branch. |
| 1484 | Uses jQuery. |
| 1485 | Uses jQuery. |
| 1486 | Closes the current block/object/function. |
| 1487 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1488 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1489 | Blank line used to separate logical code sections. |
| 1490 | Uses jQuery. |
| 1491 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1492 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1493 | Blank line used to separate logical code sections. |
| 1494 | Uses jQuery. |
| 1495 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1496 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1497 | Blank line used to separate logical code sections. |
| 1498 | Begins a conditional branch. |
| 1499 | Begins a conditional branch. |
| 1500 | Uses jQuery. |
| 1501 | Closes the current block/object/function. |
| 1502 | Closes the current block/object/function. |
| 1503 | Blank line used to separate logical code sections. |
| 1504 | Begins a conditional branch. |
| 1505 | Begins a conditional branch. |
| 1506 | Uses jQuery. |
| 1507 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1508 | Begins a conditional branch. |
| 1509 | Closes the current block/object/function. |
| 1510 | Closes the current block/object/function. |
| 1511 | Blank line used to separate logical code sections. |
| 1512 | Uses jQuery. |
| 1513 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1514 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1515 | Begins a conditional branch. |
| 1516 | Invokes a function or method. |
| 1517 | Returns a value and exits the current function. |
| 1518 | Closes the current block/object/function. |
| 1519 | Begins a conditional branch. |
| 1520 | Invokes a function or method. |
| 1521 | Returns a value and exits the current function. |
| 1522 | Closes the current block/object/function. |
| 1523 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1524 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1525 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1526 | Begins a conditional branch. |
| 1527 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1528 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1529 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1530 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1531 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1532 | Invokes a function or method. |
| 1533 | Closes the current block/object/function. |
| 1534 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1535 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1536 | Blank line used to separate logical code sections. |
| 1537 | Uses jQuery. |
| 1538 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1539 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1540 | Blank line used to separate logical code sections. |
| 1541 | Uses jQuery. |
| 1542 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1543 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1544 | Blank line used to separate logical code sections. |
| 1545 | Uses jQuery. |
| 1546 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1547 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1548 | Blank line used to separate logical code sections. |
| 1549 | Uses jQuery. |
| 1550 | Begins a conditional branch. |
| 1551 | Uses jQuery. |
| 1552 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1553 | Uses jQuery. |
| 1554 | Closes the current block/object/function. |
| 1555 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1556 | Blank line used to separate logical code sections. |
| 1557 | Uses jQuery. |
| 1558 | Begins a conditional branch. |
| 1559 | Uses jQuery. |
| 1560 | Uses jQuery. |
| 1561 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1562 | Uses jQuery. |
| 1563 | Uses jQuery. |
| 1564 | Closes the current block/object/function. |
| 1565 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1566 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1567 | Uses jQuery. |
| 1568 | Comment only. It does not execute. |
| 1569 | Begins a conditional branch. |
| 1570 | Invokes a function or method. |
| 1571 | Closes the current block/object/function. |
| 1572 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1573 | Begins a conditional branch. |
| 1574 | Invokes a function or method. |
| 1575 | Returns a value and exits the current function. |
| 1576 | Closes the current block/object/function. |
| 1577 | Begins a conditional branch. |
| 1578 | Invokes a function or method. |
| 1579 | Returns a value and exits the current function. |
| 1580 | Closes the current block/object/function. |
| 1581 | Blank line used to separate logical code sections. |
| 1582 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1583 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1584 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1585 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1586 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1587 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1588 | Begins a conditional branch. |
| 1589 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1590 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1591 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1592 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1593 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1594 | Invokes a function or method. |
| 1595 | Closes the current block/object/function. |
| 1596 | Comment only. It does not execute. |
| 1597 | Begins a conditional branch. |
| 1598 | Invokes a function or method. |
| 1599 | Closes the current block/object/function. |
| 1600 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1601 | Closes the current block/object/function. |
| 1602 | Closes the current block/object/function. |
| 1603 | Defines object method drawQuick; it operates on the containing object's state. |
| 1604 | Uses jQuery. |
| 1605 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1606 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1607 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1608 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1609 | Begins a conditional branch. |
| 1610 | Comment only. It does not execute. |
| 1611 | Comment only. It does not execute. |
| 1612 | Begins a conditional branch. |
| 1613 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1614 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1615 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1616 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1617 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1618 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1619 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1620 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1621 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1622 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1623 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1624 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1625 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1626 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1627 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1628 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1629 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1630 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1631 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1632 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1633 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1634 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1635 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1636 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1637 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1638 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1639 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1640 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1641 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1642 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1643 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1644 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1645 | Uses jQuery. |
| 1646 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1647 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1648 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1649 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1650 | Uses jQuery. |
| 1651 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1652 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1653 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1654 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1655 | Uses jQuery. |
| 1656 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1657 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1658 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1659 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1660 | Begins a conditional branch. |
| 1661 | Invokes a function or method. |
| 1662 | Returns a value and exits the current function. |
| 1663 | Closes the current block/object/function. |
| 1664 | Begins a conditional branch. |
| 1665 | Invokes a function or method. |
| 1666 | Returns a value and exits the current function. |
| 1667 | Closes the current block/object/function. |
| 1668 | Begins a conditional branch. |
| 1669 | Assigns a value to a variable or object property. |
| 1670 | Blank line used to separate logical code sections. |
| 1671 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1672 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1673 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1674 | Closes the current block/object/function. |
| 1675 | Invokes a function or method. |
| 1676 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1677 | Begins a conditional branch. |
| 1678 | Assigns a value to a variable or object property. |
| 1679 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1680 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1681 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1682 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1683 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1684 | Assigns a value to a variable or object property. |
| 1685 | Comment only. It does not execute. |
| 1686 | Blank line used to separate logical code sections. |
| 1687 | Assigns a value to a variable or object property. |
| 1688 | Comment only. It does not execute. |
| 1689 | Comment only. It does not execute. |
| 1690 | Comment only. It does not execute. |
| 1691 | Comment only. It does not execute. |
| 1692 | Comment only. It does not execute. |
| 1693 | Comment only. It does not execute. |
| 1694 | Comment only. It does not execute. |
| 1695 | Comment only. It does not execute. |
| 1696 | Schedules delayed execution. |
| 1697 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1698 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1699 | Returns a value and exits the current function. |
| 1700 | Closes the current block/object/function. |
| 1701 | Closes the current block/object/function. |
| 1702 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1703 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1704 | Invokes a function or method. |
| 1705 | Closes the current block/object/function. |
| 1706 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1707 | Uses jQuery. |
| 1708 | Comment only. It does not execute. |
| 1709 | Begins a conditional branch. |
| 1710 | Invokes a function or method. |
| 1711 | Closes the current block/object/function. |
| 1712 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1713 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1714 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1715 | Begins a conditional branch. |
| 1716 | Invokes a function or method. |
| 1717 | Returns a value and exits the current function. |
| 1718 | Closes the current block/object/function. |
| 1719 | Begins a conditional branch. |
| 1720 | Invokes a function or method. |
| 1721 | Returns a value and exits the current function. |
| 1722 | Closes the current block/object/function. |
| 1723 | Blank line used to separate logical code sections. |
| 1724 | Begins a conditional branch. |
| 1725 | Assigns a value to a variable or object property. |
| 1726 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1727 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1728 | Begins a conditional branch. |
| 1729 | Assigns a value to a variable or object property. |
| 1730 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1731 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1732 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1733 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1734 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1735 | Assigns a value to a variable or object property. |
| 1736 | Comment only. It does not execute. |
| 1737 | Assigns a value to a variable or object property. |
| 1738 | Schedules delayed execution. |
| 1739 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1740 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1741 | Closes the current block/object/function. |
| 1742 | Comment only. It does not execute. |
| 1743 | Begins a conditional branch. |
| 1744 | Invokes a function or method. |
| 1745 | Closes the current block/object/function. |
| 1746 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1747 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1748 | Invokes a function or method. |
| 1749 | Closes the current block/object/function. |
| 1750 | Closes the current block/object/function. |
| 1751 | Closes the current block/object/function. |
| 1752 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1753 | Closes the current block/object/function. |
| 1754 | Defines object method drawPhoneReg; it operates on the containing object's state. |
| 1755 | Uses jQuery. |
| 1756 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1757 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1758 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1759 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1760 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1761 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1762 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1763 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1764 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1765 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1766 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1767 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1768 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1769 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1770 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1771 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1772 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1773 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1774 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1775 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1776 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1777 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1778 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1779 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1780 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1781 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1782 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1783 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1784 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1785 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1786 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1787 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1788 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1789 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1790 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1791 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1792 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1793 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1794 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1795 | Uses jQuery. |
| 1796 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1797 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1798 | Begins a conditional branch. |
| 1799 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1800 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1801 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1802 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1803 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1804 | Invokes a function or method. |
| 1805 | Returns a value and exits the current function. |
| 1806 | Closes the current block/object/function. |
| 1807 | Begins a conditional branch. |
| 1808 | Returns a value and exits the current function. |
| 1809 | Closes the current block/object/function. |
| 1810 | Assigns a value to a variable or object property. |
| 1811 | Blank line used to separate logical code sections. |
| 1812 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1813 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1814 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1815 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1816 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1817 | Closes the current block/object/function. |
| 1818 | Invokes a function or method. |
| 1819 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1820 | Begins a conditional branch. |
| 1821 | Starts a repeating timer. |
| 1822 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1823 | Uses jQuery. |
| 1824 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1825 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1826 | Begins a conditional branch. |
| 1827 | Assigns a value to a variable or object property. |
| 1828 | Uses jQuery. |
| 1829 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1830 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1831 | Assigns a value to a variable or object property. |
| 1832 | Invokes a function or method. |
| 1833 | Closes the current block/object/function. |
| 1834 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1835 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1836 | Assigns a value to a variable or object property. |
| 1837 | Invokes a function or method. |
| 1838 | Closes the current block/object/function. |
| 1839 | Closes the current block/object/function. |
| 1840 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1841 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1842 | Uses jQuery. |
| 1843 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1844 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1845 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1846 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1847 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1848 | Begins a conditional branch. |
| 1849 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1850 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1851 | Invokes a function or method. |
| 1852 | Returns a value and exits the current function. |
| 1853 | Closes the current block/object/function. |
| 1854 | Begins a conditional branch. |
| 1855 | Invokes a function or method. |
| 1856 | Returns a value and exits the current function. |
| 1857 | Closes the current block/object/function. |
| 1858 | Begins a conditional branch. |
| 1859 | Invokes a function or method. |
| 1860 | Returns a value and exits the current function. |
| 1861 | Closes the current block/object/function. |
| 1862 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1863 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1864 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1865 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1866 | Closes the current block/object/function. |
| 1867 | Invokes a function or method. |
| 1868 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1869 | Begins a conditional branch. |
| 1870 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1871 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1872 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1873 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1874 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1875 | Invokes a function or method. |
| 1876 | Closes the current block/object/function. |
| 1877 | Closes the current block/object/function. |
| 1878 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1879 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1880 | Uses jQuery. |
| 1881 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1882 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1883 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1884 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1885 | Uses jQuery. |
| 1886 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1887 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1888 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1889 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1890 | Uses jQuery. |
| 1891 | Closes the current block/object/function. |
| 1892 | Block-comment text. It does not execute. |
| 1893 | Defines object method drawxzball; it operates on the containing object's state. |
| 1894 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1895 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1896 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1897 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1898 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1899 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1900 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1901 | Uses jQuery. |
| 1902 | Blank line used to separate logical code sections. |
| 1903 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1904 | Comment only. It does not execute. |
| 1905 | Begins a conditional branch. |
| 1906 | Assigns a value to a variable or object property. |
| 1907 | Assigns a value to a variable or object property. |
| 1908 | Assigns a value to a variable or object property. |
| 1909 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1910 | Assigns a value to a variable or object property. |
| 1911 | Assigns a value to a variable or object property. |
| 1912 | Assigns a value to a variable or object property. |
| 1913 | Closes the current block/object/function. |
| 1914 | Comment only. It does not execute. |
| 1915 | Uses a browser DOM/window/navigation API. |
| 1916 | Assigns a value to a variable or object property. |
| 1917 | Assigns a value to a variable or object property. |
| 1918 | Comment only. It does not execute. |
| 1919 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1920 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1921 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1922 | Blank line used to separate logical code sections. |
| 1923 | Registers a browser/runtime event listener. |
| 1924 | Comment only. It does not execute. |
| 1925 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1926 | Comment only. It does not execute. |
| 1927 | Uses a browser DOM/window/navigation API. |
| 1928 | Blank line used to separate logical code sections. |
| 1929 | Comment only. It does not execute. |
| 1930 | Assigns a value to a variable or object property. |
| 1931 | Assigns a value to a variable or object property. |
| 1932 | Comment only. It does not execute. |
| 1933 | Assigns a value to a variable or object property. |
| 1934 | Assigns a value to a variable or object property. |
| 1935 | Comment only. It does not execute. |
| 1936 | Registers a browser/runtime event listener. |
| 1937 | Registers a browser/runtime event listener. |
| 1938 | Blank line used to separate logical code sections. |
| 1939 | Uses jQuery. |
| 1940 | Assigns a value to a variable or object property. |
| 1941 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1942 | Blank line used to separate logical code sections. |
| 1943 | Defines function moveFun, creating a reusable operation. |
| 1944 | Comment only. It does not execute. |
| 1945 | Uses a browser DOM/window/navigation API. |
| 1946 | Begins a conditional branch. |
| 1947 | Assigns a value to a variable or object property. |
| 1948 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1949 | Assigns a value to a variable or object property. |
| 1950 | Closes the current block/object/function. |
| 1951 | Blank line used to separate logical code sections. |
| 1952 | Assigns a value to a variable or object property. |
| 1953 | Assigns a value to a variable or object property. |
| 1954 | Comment only. It does not execute. |
| 1955 | Begins a conditional branch. |
| 1956 | Assigns a value to a variable or object property. |
| 1957 | Uses a browser DOM/window/navigation API. |
| 1958 | Uses a browser DOM/window/navigation API. |
| 1959 | Closes the current block/object/function. |
| 1960 | Comment only. It does not execute. |
| 1961 | Begins a conditional branch. |
| 1962 | Assigns a value to a variable or object property. |
| 1963 | Uses a browser DOM/window/navigation API. |
| 1964 | Uses a browser DOM/window/navigation API. |
| 1965 | Closes the current block/object/function. |
| 1966 | Assigns a value to a variable or object property. |
| 1967 | Assigns a value to a variable or object property. |
| 1968 | Invokes a function or method. |
| 1969 | Closes the current block/object/function. |
| 1970 | Blank line used to separate logical code sections. |
| 1971 | Defines function endFun, creating a reusable operation. |
| 1972 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1973 | Begins a conditional branch. |
| 1974 | Uses a browser DOM/window/navigation API. |
| 1975 | Assigns a value to a variable or object property. |
| 1976 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1977 | Assigns a value to a variable or object property. |
| 1978 | Assigns a value to a variable or object property. |
| 1979 | Closes the current block/object/function. |
| 1980 | Assigns a value to a variable or object property. |
| 1981 | Uses a browser DOM/window/navigation API. |
| 1982 | Uses a browser DOM/window/navigation API. |
| 1983 | Begins a conditional branch. |
| 1984 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1985 | Blank line used to separate logical code sections. |
| 1986 | Assigns a value to a variable or object property. |
| 1987 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1988 | Assigns a value to a variable or object property. |
| 1989 | Closes the current block/object/function. |
| 1990 | Blank line used to separate logical code sections. |
| 1991 | Schedules delayed execution. |
| 1992 | Uses jQuery. |
| 1993 | Begins a conditional branch. |
| 1994 | Assigns a value to a variable or object property. |
| 1995 | Blank line used to separate logical code sections. |
| 1996 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 1997 | Assigns a value to a variable or object property. |
| 1998 | Closes the current block/object/function. |
| 1999 | Blank line used to separate logical code sections. |
| 2000 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2001 | Closes the current block/object/function. |
| 2002 | Closes the current block/object/function. |
| 2003 | Defines object method drawMenu; it operates on the containing object's state. |
| 2004 | Uses jQuery. |
| 2005 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2006 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2007 | Writes diagnostic information to the console. |
| 2008 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2009 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2010 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2011 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2012 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2013 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2014 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2015 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2016 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2017 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2018 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2019 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2020 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2021 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2022 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2023 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2024 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2025 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2026 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2027 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2028 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2029 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2030 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2031 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2032 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2033 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2034 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2035 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2036 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2037 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2038 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2039 | Blank line used to separate logical code sections. |
| 2040 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2041 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2042 | Blank line used to separate logical code sections. |
| 2043 | Uses jQuery. |
| 2044 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2045 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2046 | Uses jQuery. |
| 2047 | Uses jQuery. |
| 2048 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2049 | Uses jQuery. |
| 2050 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2051 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2052 | Begins a conditional branch. |
| 2053 | Returns a value and exits the current function. |
| 2054 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2055 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2056 | Closes the current block/object/function. |
| 2057 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2058 | Uses jQuery. |
| 2059 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2060 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2061 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2062 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2063 | Uses jQuery. |
| 2064 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2065 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2066 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2067 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2068 | Uses jQuery. |
| 2069 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2070 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2071 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2072 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2073 | Uses jQuery. |
| 2074 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2075 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2076 | Uses a browser DOM/window/navigation API. |
| 2077 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2078 | Uses jQuery. |
| 2079 | Closes the current block/object/function. |
| 2080 | Defines object method drawBindPhone; it operates on the containing object's state. |
| 2081 | Uses jQuery. |
| 2082 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2083 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2084 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2085 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2086 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2087 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2088 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2089 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2090 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2091 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2092 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2093 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2094 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2095 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2096 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2097 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2098 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2099 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2100 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2101 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2102 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2103 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2104 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2105 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2106 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2107 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2108 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2109 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2110 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2111 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2112 | Uses jQuery. |
| 2113 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2114 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2115 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2116 | Begins a conditional branch. |
| 2117 | Invokes a function or method. |
| 2118 | Returns a value and exits the current function. |
| 2119 | Closes the current block/object/function. |
| 2120 | Begins a conditional branch. |
| 2121 | Invokes a function or method. |
| 2122 | Returns a value and exits the current function. |
| 2123 | Closes the current block/object/function. |
| 2124 | Begins a conditional branch. |
| 2125 | Returns a value and exits the current function. |
| 2126 | Closes the current block/object/function. |
| 2127 | Assigns a value to a variable or object property. |
| 2128 | Begins a conditional branch. |
| 2129 | Returns a value and exits the current function. |
| 2130 | Closes the current block/object/function. |
| 2131 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2132 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2133 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2134 | Closes the current block/object/function. |
| 2135 | Invokes a function or method. |
| 2136 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2137 | Begins a conditional branch. |
| 2138 | Starts a repeating timer. |
| 2139 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2140 | Uses jQuery. |
| 2141 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2142 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2143 | Begins a conditional branch. |
| 2144 | Assigns a value to a variable or object property. |
| 2145 | Uses jQuery. |
| 2146 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2147 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2148 | Assigns a value to a variable or object property. |
| 2149 | Invokes a function or method. |
| 2150 | Closes the current block/object/function. |
| 2151 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2152 | Invokes a function or method. |
| 2153 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2154 | Invokes a function or method. |
| 2155 | Closes the current block/object/function. |
| 2156 | Closes the current block/object/function. |
| 2157 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2158 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2159 | Uses jQuery. |
| 2160 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2161 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2162 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2163 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2164 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2165 | Begins a conditional branch. |
| 2166 | Invokes a function or method. |
| 2167 | Returns a value and exits the current function. |
| 2168 | Closes the current block/object/function. |
| 2169 | Begins a conditional branch. |
| 2170 | Invokes a function or method. |
| 2171 | Returns a value and exits the current function. |
| 2172 | Closes the current block/object/function. |
| 2173 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2174 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2175 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2176 | Closes the current block/object/function. |
| 2177 | Defines function success, creating a reusable operation. |
| 2178 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2179 | Begins a conditional branch. |
| 2180 | Invokes a function or method. |
| 2181 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2182 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2183 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2184 | Invokes a function or method. |
| 2185 | Closes the current block/object/function. |
| 2186 | Closes the current block/object/function. |
| 2187 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2188 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2189 | Uses jQuery. |
| 2190 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2191 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2192 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2193 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2194 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2195 | Uses jQuery. |
| 2196 | Closes the current block/object/function. |
| 2197 | Defines object method drawResetPwd; it operates on the containing object's state. |
| 2198 | Uses jQuery. |
| 2199 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2200 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2201 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2202 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2203 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2204 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2205 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2206 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2207 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2208 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2209 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2210 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2211 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2212 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2213 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2214 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2215 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2216 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2217 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2218 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2219 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2220 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2221 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2222 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2223 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2224 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2225 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2226 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2227 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2228 | Uses jQuery. |
| 2229 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2230 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2231 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2232 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2233 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2234 | Uses jQuery. |
| 2235 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2236 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2237 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2238 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2239 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2240 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2241 | Begins a conditional branch. |
| 2242 | Invokes a function or method. |
| 2243 | Returns a value and exits the current function. |
| 2244 | Closes the current block/object/function. |
| 2245 | Begins a conditional branch. |
| 2246 | Invokes a function or method. |
| 2247 | Returns a value and exits the current function. |
| 2248 | Closes the current block/object/function. |
| 2249 | Begins a conditional branch. |
| 2250 | Invokes a function or method. |
| 2251 | Returns a value and exits the current function. |
| 2252 | Closes the current block/object/function. |
| 2253 | Begins a conditional branch. |
| 2254 | Invokes a function or method. |
| 2255 | Returns a value and exits the current function. |
| 2256 | Closes the current block/object/function. |
| 2257 | Begins a conditional branch. |
| 2258 | Invokes a function or method. |
| 2259 | Returns a value and exits the current function. |
| 2260 | Closes the current block/object/function. |
| 2261 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2262 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2263 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2264 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2265 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2266 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2267 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2268 | Begins a conditional branch. |
| 2269 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2270 | Invokes a function or method. |
| 2271 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2272 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2273 | Comment only. It does not execute. |
| 2274 | Invokes a function or method. |
| 2275 | Closes the current block/object/function. |
| 2276 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2277 | Blank line used to separate logical code sections. |
| 2278 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2279 | Uses jQuery. |
| 2280 | Closes the current block/object/function. |
| 2281 | Defines object method loadingPopup; it operates on the containing object's state. |
| 2282 | Uses jQuery. |
| 2283 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2284 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2285 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2286 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2287 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2288 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2289 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2290 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2291 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2292 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2293 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2294 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2295 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2296 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2297 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2298 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2299 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2300 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2301 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2302 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2303 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2304 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2305 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2306 | Uses jQuery. |
| 2307 | Closes the current block/object/function. |
| 2308 | Defines object method viewInputHide; it operates on the containing object's state. |
| 2309 | Begins a conditional branch. |
| 2310 | Uses jQuery. |
| 2311 | Closes the current block/object/function. |
| 2312 | Comment only. It does not execute. |
| 2313 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2314 | Uses jQuery. |
| 2315 | Uses jQuery. |
| 2316 | Schedules delayed execution. |
| 2317 | Uses jQuery. |
| 2318 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2319 | Closes the current block/object/function. |
| 2320 | Defines object method drawForget; it operates on the containing object's state. |
| 2321 | Uses jQuery. |
| 2322 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2323 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2324 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2325 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2326 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2327 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2328 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2329 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2330 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2331 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2332 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2333 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2334 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2335 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2336 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2337 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2338 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2339 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2340 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2341 | Blank line used to separate logical code sections. |
| 2342 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2343 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2344 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2345 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2346 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2347 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2348 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2349 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2350 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2351 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2352 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2353 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2354 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2355 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2356 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2357 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2358 | Uses jQuery. |
| 2359 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2360 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2361 | Begins a conditional branch. |
| 2362 | Invokes a function or method. |
| 2363 | Returns a value and exits the current function. |
| 2364 | Closes the current block/object/function. |
| 2365 | Begins a conditional branch. |
| 2366 | Returns a value and exits the current function. |
| 2367 | Closes the current block/object/function. |
| 2368 | Assigns a value to a variable or object property. |
| 2369 | Begins a conditional branch. |
| 2370 | Returns a value and exits the current function. |
| 2371 | Closes the current block/object/function. |
| 2372 | Starts a repeating timer. |
| 2373 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2374 | Uses jQuery. |
| 2375 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2376 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2377 | Begins a conditional branch. |
| 2378 | Assigns a value to a variable or object property. |
| 2379 | Uses jQuery. |
| 2380 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2381 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2382 | Assigns a value to a variable or object property. |
| 2383 | Invokes a function or method. |
| 2384 | Closes the current block/object/function. |
| 2385 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2386 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2387 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2388 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2389 | Closes the current block/object/function. |
| 2390 | Invokes a function or method. |
| 2391 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2392 | Begins a conditional branch. |
| 2393 | Invokes a function or method. |
| 2394 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2395 | Invokes a function or method. |
| 2396 | Closes the current block/object/function. |
| 2397 | Closes the current block/object/function. |
| 2398 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2399 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2400 | Uses jQuery. |
| 2401 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2402 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2403 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2404 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2405 | Uses jQuery. |
| 2406 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2407 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2408 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2409 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2410 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2411 | Blank line used to separate logical code sections. |
| 2412 | Begins a conditional branch. |
| 2413 | Invokes a function or method. |
| 2414 | Returns a value and exits the current function. |
| 2415 | Closes the current block/object/function. |
| 2416 | Begins a conditional branch. |
| 2417 | Invokes a function or method. |
| 2418 | Returns a value and exits the current function. |
| 2419 | Closes the current block/object/function. |
| 2420 | Begins a conditional branch. |
| 2421 | Invokes a function or method. |
| 2422 | Returns a value and exits the current function. |
| 2423 | Closes the current block/object/function. |
| 2424 | Blank line used to separate logical code sections. |
| 2425 | Begins a conditional branch. |
| 2426 | Invokes a function or method. |
| 2427 | Returns a value and exits the current function. |
| 2428 | Closes the current block/object/function. |
| 2429 | Blank line used to separate logical code sections. |
| 2430 | Begins a conditional branch. |
| 2431 | Invokes a function or method. |
| 2432 | Returns a value and exits the current function. |
| 2433 | Closes the current block/object/function. |
| 2434 | Begins a conditional branch. |
| 2435 | Invokes a function or method. |
| 2436 | Returns a value and exits the current function. |
| 2437 | Closes the current block/object/function. |
| 2438 | Blank line used to separate logical code sections. |
| 2439 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2440 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2441 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2442 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2443 | Closes the current block/object/function. |
| 2444 | Invokes a function or method. |
| 2445 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2446 | Begins a conditional branch. |
| 2447 | Invokes a function or method. |
| 2448 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2449 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2450 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2451 | Uses jQuery. |
| 2452 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2453 | Blank line used to separate logical code sections. |
| 2454 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2455 | Invokes a function or method. |
| 2456 | Closes the current block/object/function. |
| 2457 | Closes the current block/object/function. |
| 2458 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2459 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2460 | Uses jQuery. |
| 2461 | Closes the current block/object/function. |
| 2462 | Block-comment text. It does not execute. |
| 2463 | Blank line used to separate logical code sections. |
| 2464 | Blank line used to separate logical code sections. |
| 2465 | Blank line used to separate logical code sections. |
| 2466 | Blank line used to separate logical code sections. |
| 2467 | Blank line used to separate logical code sections. |
| 2468 | Defines object method pay; it operates on the containing object's state. |
| 2469 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2470 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2471 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2472 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2473 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2474 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2475 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2476 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2477 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2478 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2479 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2480 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2481 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2482 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2483 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2484 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2485 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2486 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2487 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2488 | Closes the current block/object/function. |
| 2489 | Writes diagnostic information to the console. |
| 2490 | Uses a browser DOM/window/navigation API. |
| 2491 | Closes the current block/object/function. |
| 2492 | Defines object method openPay; it operates on the containing object's state. |
| 2493 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2494 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2495 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2496 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2497 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2498 | Begins a conditional branch. |
| 2499 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2500 | Assigns a value to a variable or object property. |
| 2501 | Assigns a value to a variable or object property. |
| 2502 | Assigns a value to a variable or object property. |
| 2503 | Assigns a value to a variable or object property. |
| 2504 | Assigns a value to a variable or object property. |
| 2505 | Assigns a value to a variable or object property. |
| 2506 | Assigns a value to a variable or object property. |
| 2507 | Assigns a value to a variable or object property. |
| 2508 | Assigns a value to a variable or object property. |
| 2509 | Assigns a value to a variable or object property. |
| 2510 | Assigns a value to a variable or object property. |
| 2511 | Assigns a value to a variable or object property. |
| 2512 | Comment only. It does not execute. |
| 2513 | Starts a jQuery AJAX request. |
| 2514 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2515 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2516 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2517 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2518 | Defines object method success; it operates on the containing object's state. |
| 2519 | Begins a conditional branch. |
| 2520 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2521 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2522 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2523 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2524 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2525 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2526 | Closes the current block/object/function. |
| 2527 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2528 | Sends a cross-window message used by the SDK/game bridge. |
| 2529 | Blank line used to separate logical code sections. |
| 2530 | Starts a repeating timer. |
| 2531 | Begins a conditional branch. |
| 2532 | Returns a value and exits the current function. |
| 2533 | Closes the current block/object/function. |
| 2534 | Begins a conditional branch. |
| 2535 | Invokes a function or method. |
| 2536 | Invokes a function or method. |
| 2537 | Closes the current block/object/function. |
| 2538 | Assigns a value to a variable or object property. |
| 2539 | Uses jQuery. |
| 2540 | Assigns a value to a variable or object property. |
| 2541 | Begins a conditional branch. |
| 2542 | Begins a conditional branch. |
| 2543 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2544 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2545 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2546 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2547 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2548 | Closes the current block/object/function. |
| 2549 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2550 | Blank line used to separate logical code sections. |
| 2551 | Comment only. It does not execute. |
| 2552 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2553 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2554 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2555 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2556 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2557 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2558 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2559 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2560 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2561 | Closes the current block/object/function. |
| 2562 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2563 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2564 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2565 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2566 | Blank line used to separate logical code sections. |
| 2567 | Invokes a function or method. |
| 2568 | Invokes a function or method. |
| 2569 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2570 | Comment only. It does not execute. |
| 2571 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2572 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2573 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2574 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2575 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2576 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2577 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2578 | Closes the current block/object/function. |
| 2579 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2580 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2581 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2582 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2583 | Closes the current block/object/function. |
| 2584 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2585 | Invokes a function or method. |
| 2586 | Invokes a function or method. |
| 2587 | Closes the current block/object/function. |
| 2588 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2589 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2590 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2591 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2592 | Writes diagnostic information to the console. |
| 2593 | Invokes a function or method. |
| 2594 | Closes the current block/object/function. |
| 2595 | Closes the current block/object/function. |
| 2596 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2597 | Uses jQuery. |
| 2598 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2599 | Assigns a value to a variable or object property. |
| 2600 | Assigns a value to a variable or object property. |
| 2601 | Assigns a value to a variable or object property. |
| 2602 | Assigns a value to a variable or object property. |
| 2603 | Assigns a value to a variable or object property. |
| 2604 | Assigns a value to a variable or object property. |
| 2605 | Assigns a value to a variable or object property. |
| 2606 | Assigns a value to a variable or object property. |
| 2607 | Assigns a value to a variable or object property. |
| 2608 | Assigns a value to a variable or object property. |
| 2609 | Assigns a value to a variable or object property. |
| 2610 | Assigns a value to a variable or object property. |
| 2611 | Comment only. It does not execute. |
| 2612 | Starts a jQuery AJAX request. |
| 2613 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2614 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2615 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2616 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2617 | Defines object method success; it operates on the containing object's state. |
| 2618 | Begins a conditional branch. |
| 2619 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2620 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2621 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2622 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2623 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2624 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2625 | Closes the current block/object/function. |
| 2626 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2627 | Uses a browser DOM/window/navigation API. |
| 2628 | Blank line used to separate logical code sections. |
| 2629 | Starts a repeating timer. |
| 2630 | Begins a conditional branch. |
| 2631 | Returns a value and exits the current function. |
| 2632 | Closes the current block/object/function. |
| 2633 | Begins a conditional branch. |
| 2634 | Invokes a function or method. |
| 2635 | Invokes a function or method. |
| 2636 | Closes the current block/object/function. |
| 2637 | Assigns a value to a variable or object property. |
| 2638 | Uses jQuery. |
| 2639 | Assigns a value to a variable or object property. |
| 2640 | Begins a conditional branch. |
| 2641 | Begins a conditional branch. |
| 2642 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2643 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2644 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2645 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2646 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2647 | Closes the current block/object/function. |
| 2648 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2649 | Blank line used to separate logical code sections. |
| 2650 | Comment only. It does not execute. |
| 2651 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2652 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2653 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2654 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2655 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2656 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2657 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2658 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2659 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2660 | Closes the current block/object/function. |
| 2661 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2662 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2663 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2664 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2665 | Blank line used to separate logical code sections. |
| 2666 | Invokes a function or method. |
| 2667 | Invokes a function or method. |
| 2668 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2669 | Comment only. It does not execute. |
| 2670 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2671 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2672 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2673 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2674 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2675 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2676 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2677 | Closes the current block/object/function. |
| 2678 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2679 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2680 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2681 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2682 | Closes the current block/object/function. |
| 2683 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2684 | Invokes a function or method. |
| 2685 | Invokes a function or method. |
| 2686 | Closes the current block/object/function. |
| 2687 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2688 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2689 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2690 | Blank line used to separate logical code sections. |
| 2691 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2692 | Writes diagnostic information to the console. |
| 2693 | Invokes a function or method. |
| 2694 | Closes the current block/object/function. |
| 2695 | Closes the current block/object/function. |
| 2696 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2697 | Uses jQuery. |
| 2698 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2699 | Comment only. It does not execute. |
| 2700 | Blank line used to separate logical code sections. |
| 2701 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2702 | Assigns a value to a variable or object property. |
| 2703 | Assigns a value to a variable or object property. |
| 2704 | Assigns a value to a variable or object property. |
| 2705 | Assigns a value to a variable or object property. |
| 2706 | Assigns a value to a variable or object property. |
| 2707 | Assigns a value to a variable or object property. |
| 2708 | Assigns a value to a variable or object property. |
| 2709 | Assigns a value to a variable or object property. |
| 2710 | Assigns a value to a variable or object property. |
| 2711 | Assigns a value to a variable or object property. |
| 2712 | Assigns a value to a variable or object property. |
| 2713 | Assigns a value to a variable or object property. |
| 2714 | Comment only. It does not execute. |
| 2715 | Starts a jQuery AJAX request. |
| 2716 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2717 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2718 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2719 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2720 | Defines object method success; it operates on the containing object's state. |
| 2721 | Begins a conditional branch. |
| 2722 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2723 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2724 | Serializes or deserializes JSON. |
| 2725 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2726 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2727 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2728 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2729 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2730 | Closes the current block/object/function. |
| 2731 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2732 | Uses a browser DOM/window/navigation API. |
| 2733 | Blank line used to separate logical code sections. |
| 2734 | Starts a repeating timer. |
| 2735 | Begins a conditional branch. |
| 2736 | Returns a value and exits the current function. |
| 2737 | Closes the current block/object/function. |
| 2738 | Begins a conditional branch. |
| 2739 | Invokes a function or method. |
| 2740 | Invokes a function or method. |
| 2741 | Closes the current block/object/function. |
| 2742 | Assigns a value to a variable or object property. |
| 2743 | Uses jQuery. |
| 2744 | Assigns a value to a variable or object property. |
| 2745 | Begins a conditional branch. |
| 2746 | Begins a conditional branch. |
| 2747 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2748 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2749 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2750 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2751 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2752 | Closes the current block/object/function. |
| 2753 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2754 | Blank line used to separate logical code sections. |
| 2755 | Comment only. It does not execute. |
| 2756 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2757 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2758 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2759 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2760 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2761 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2762 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2763 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2764 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2765 | Closes the current block/object/function. |
| 2766 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2767 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2768 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2769 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2770 | Blank line used to separate logical code sections. |
| 2771 | Invokes a function or method. |
| 2772 | Invokes a function or method. |
| 2773 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2774 | Comment only. It does not execute. |
| 2775 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2776 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2777 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2778 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2779 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2780 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2781 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2782 | Closes the current block/object/function. |
| 2783 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2784 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2785 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2786 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2787 | Closes the current block/object/function. |
| 2788 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2789 | Invokes a function or method. |
| 2790 | Invokes a function or method. |
| 2791 | Closes the current block/object/function. |
| 2792 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2793 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2794 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2795 | Blank line used to separate logical code sections. |
| 2796 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2797 | Writes diagnostic information to the console. |
| 2798 | Invokes a function or method. |
| 2799 | Closes the current block/object/function. |
| 2800 | Closes the current block/object/function. |
| 2801 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2802 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2803 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2804 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2805 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2806 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2807 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2808 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2809 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2810 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2811 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2812 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2813 | Uses jQuery. |
| 2814 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2815 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2816 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2817 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2818 | Uses jQuery. |
| 2819 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2820 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2821 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2822 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2823 | Uses jQuery. |
| 2824 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2825 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2826 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2827 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2828 | Uses jQuery. |
| 2829 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2830 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2831 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2832 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2833 | Uses jQuery. |
| 2834 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2835 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2836 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2837 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2838 | Uses jQuery. |
| 2839 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2840 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2841 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2842 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2843 | Uses jQuery. |
| 2844 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2845 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2846 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2847 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2848 | Uses jQuery. |
| 2849 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2850 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2851 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2852 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2853 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2854 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2855 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2856 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2857 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2858 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2859 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2860 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2861 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2862 | Writes diagnostic information to the console. |
| 2863 | Uses jQuery. |
| 2864 | Uses jQuery. |
| 2865 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2866 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2867 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2868 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2869 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2870 | Blank line used to separate logical code sections. |
| 2871 | Begins a conditional branch. |
| 2872 | Uses a browser DOM/window/navigation API. |
| 2873 | Returns a value and exits the current function. |
| 2874 | Closes the current block/object/function. |
| 2875 | Blank line used to separate logical code sections. |
| 2876 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2877 | Assigns a value to a variable or object property. |
| 2878 | Assigns a value to a variable or object property. |
| 2879 | Assigns a value to a variable or object property. |
| 2880 | Assigns a value to a variable or object property. |
| 2881 | Assigns a value to a variable or object property. |
| 2882 | Assigns a value to a variable or object property. |
| 2883 | Assigns a value to a variable or object property. |
| 2884 | Assigns a value to a variable or object property. |
| 2885 | Assigns a value to a variable or object property. |
| 2886 | Assigns a value to a variable or object property. |
| 2887 | Assigns a value to a variable or object property. |
| 2888 | Serializes or deserializes JSON. |
| 2889 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2890 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2891 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2892 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2893 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2894 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2895 | Closes the current block/object/function. |
| 2896 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2897 | Assigns a value to a variable or object property. |
| 2898 | Blank line used to separate logical code sections. |
| 2899 | Comment only. It does not execute. |
| 2900 | Starts a jQuery AJAX request. |
| 2901 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2902 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2903 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2904 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2905 | Defines object method success; it operates on the containing object's state. |
| 2906 | Begins a conditional branch. |
| 2907 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2908 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2909 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2910 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2911 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2912 | Closes the current block/object/function. |
| 2913 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2914 | Blank line used to separate logical code sections. |
| 2915 | Begins a conditional branch. |
| 2916 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2917 | Uses a browser DOM/window/navigation API. |
| 2918 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2919 | Begins a conditional branch. |
| 2920 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2921 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2922 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2923 | Comment only. It does not execute. |
| 2924 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2925 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2926 | Closes the current block/object/function. |
| 2927 | Uses a browser DOM/window/navigation API. |
| 2928 | Comment only. It does not execute. |
| 2929 | Closes the current block/object/function. |
| 2930 | Blank line used to separate logical code sections. |
| 2931 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2932 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2933 | Starts a repeating timer. |
| 2934 | Begins a conditional branch. |
| 2935 | Returns a value and exits the current function. |
| 2936 | Closes the current block/object/function. |
| 2937 | Begins a conditional branch. |
| 2938 | Invokes a function or method. |
| 2939 | Invokes a function or method. |
| 2940 | Closes the current block/object/function. |
| 2941 | Assigns a value to a variable or object property. |
| 2942 | Uses jQuery. |
| 2943 | Assigns a value to a variable or object property. |
| 2944 | Begins a conditional branch. |
| 2945 | Begins a conditional branch. |
| 2946 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2947 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2948 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2949 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2950 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2951 | Closes the current block/object/function. |
| 2952 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2953 | Blank line used to separate logical code sections. |
| 2954 | Comment only. It does not execute. |
| 2955 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2956 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2957 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2958 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2959 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2960 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2961 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2962 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2963 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2964 | Closes the current block/object/function. |
| 2965 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2966 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2967 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2968 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2969 | Blank line used to separate logical code sections. |
| 2970 | Invokes a function or method. |
| 2971 | Invokes a function or method. |
| 2972 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2973 | Comment only. It does not execute. |
| 2974 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2975 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2976 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2977 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2978 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2979 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2980 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2981 | Closes the current block/object/function. |
| 2982 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2983 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2984 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2985 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2986 | Closes the current block/object/function. |
| 2987 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2988 | Invokes a function or method. |
| 2989 | Invokes a function or method. |
| 2990 | Closes the current block/object/function. |
| 2991 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2992 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2993 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2994 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 2995 | Writes diagnostic information to the console. |
| 2996 | Invokes a function or method. |
| 2997 | Closes the current block/object/function. |
| 2998 | Closes the current block/object/function. |
| 2999 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3000 | Uses jQuery. |
| 3001 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3002 | Uses jQuery. |
| 3003 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3004 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3005 | Comment only. It does not execute. |
| 3006 | Uses jQuery. |
| 3007 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3008 | Uses jQuery. |
| 3009 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3010 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3011 | Uses jQuery. |
| 3012 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3013 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3014 | Uses jQuery. |
| 3015 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3016 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3017 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3018 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3019 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3020 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3021 | Begins a conditional branch. |
| 3022 | Uses jQuery. |
| 3023 | Uses jQuery. |
| 3024 | Uses jQuery. |
| 3025 | Uses jQuery. |
| 3026 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3027 | Assigns a value to a variable or object property. |
| 3028 | Assigns a value to a variable or object property. |
| 3029 | Assigns a value to a variable or object property. |
| 3030 | Assigns a value to a variable or object property. |
| 3031 | Assigns a value to a variable or object property. |
| 3032 | Assigns a value to a variable or object property. |
| 3033 | Assigns a value to a variable or object property. |
| 3034 | Assigns a value to a variable or object property. |
| 3035 | Assigns a value to a variable or object property. |
| 3036 | Assigns a value to a variable or object property. |
| 3037 | Assigns a value to a variable or object property. |
| 3038 | Blank line used to separate logical code sections. |
| 3039 | Writes diagnostic information to the console. |
| 3040 | Blank line used to separate logical code sections. |
| 3041 | Begins a conditional branch. |
| 3042 | Begins a conditional branch. |
| 3043 | Writes diagnostic information to the console. |
| 3044 | Assigns a value to a variable or object property. |
| 3045 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3046 | Adds a Promise failure handler. |
| 3047 | Closes the current block/object/function. |
| 3048 | Closes the current block/object/function. |
| 3049 | Blank line used to separate logical code sections. |
| 3050 | Begins a conditional branch. |
| 3051 | Assigns a value to a variable or object property. |
| 3052 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3053 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3054 | Closes the current block/object/function. |
| 3055 | Blank line used to separate logical code sections. |
| 3056 | Begins a conditional branch. |
| 3057 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3058 | Comment only. It does not execute. |
| 3059 | Defines object method createOrder; it operates on the containing object's state. |
| 3060 | Returns a value and exits the current function. |
| 3061 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3062 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3063 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3064 | Closes the current block/object/function. |
| 3065 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3066 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3067 | Serializes or deserializes JSON. |
| 3068 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3069 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3070 | Adds a Promise success continuation. |
| 3071 | Writes diagnostic information to the console. |
| 3072 | Returns a value and exits the current function. |
| 3073 | Adds a Promise success continuation. |
| 3074 | Begins a conditional branch. |
| 3075 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3076 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3077 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3078 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3079 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3080 | Closes the current block/object/function. |
| 3081 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3082 | Blank line used to separate logical code sections. |
| 3083 | Closes the current block/object/function. |
| 3084 | Begins a conditional branch. |
| 3085 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3086 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3087 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3088 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3089 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3090 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3091 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3092 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3093 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3094 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3095 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3096 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3097 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3098 | Uses jQuery. |
| 3099 | Uses jQuery. |
| 3100 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3101 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3102 | Uses jQuery. |
| 3103 | Uses jQuery. |
| 3104 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3105 | Closes the current block/object/function. |
| 3106 | Writes diagnostic information to the console. |
| 3107 | Returns a value and exits the current function. |
| 3108 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3109 | Closes the current block/object/function. |
| 3110 | Comment only. It does not execute. |
| 3111 | Defines object method onApprove; it operates on the containing object's state. |
| 3112 | Assigns a value to a variable or object property. |
| 3113 | Writes diagnostic information to the console. |
| 3114 | Returns a value and exits the current function. |
| 3115 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3116 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3117 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3118 | Closes the current block/object/function. |
| 3119 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3120 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3121 | Serializes or deserializes JSON. |
| 3122 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3123 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3124 | Adds a Promise success continuation. |
| 3125 | Writes diagnostic information to the console. |
| 3126 | Returns a value and exits the current function. |
| 3127 | Adds a Promise success continuation. |
| 3128 | Writes diagnostic information to the console. |
| 3129 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3130 | Begins a conditional branch. |
| 3131 | Returns a value and exits the current function. |
| 3132 | Closes the current block/object/function. |
| 3133 | Blank line used to separate logical code sections. |
| 3134 | Begins a conditional branch. |
| 3135 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3136 | Begins a conditional branch. |
| 3137 | Begins a conditional branch. |
| 3138 | Invokes a function or method. |
| 3139 | Closes the current block/object/function. |
| 3140 | Blank line used to separate logical code sections. |
| 3141 | Comment only. It does not execute. |
| 3142 | Begins a conditional branch. |
| 3143 | Begins a conditional branch. |
| 3144 | Invokes a function or method. |
| 3145 | Closes the current block/object/function. |
| 3146 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3147 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3148 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3149 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3150 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3151 | Closes the current block/object/function. |
| 3152 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3153 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3154 | Invokes a function or method. |
| 3155 | Blank line used to separate logical code sections. |
| 3156 | Comment only. It does not execute. |
| 3157 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3158 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3159 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3160 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3161 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3162 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3163 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3164 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3165 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3166 | Closes the current block/object/function. |
| 3167 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3168 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3169 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3170 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3171 | Blank line used to separate logical code sections. |
| 3172 | Invokes a function or method. |
| 3173 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3174 | Comment only. It does not execute. |
| 3175 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3176 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3177 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3178 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3179 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3180 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3181 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3182 | Closes the current block/object/function. |
| 3183 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3184 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3185 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3186 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3187 | Invokes a function or method. |
| 3188 | Closes the current block/object/function. |
| 3189 | Uses jQuery. |
| 3190 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3191 | Closes the current block/object/function. |
| 3192 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3193 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3194 | Closes the current block/object/function. |
| 3195 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3196 | Closes the current block/object/function. |
| 3197 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3198 | Uses jQuery. |
| 3199 | Uses jQuery. |
| 3200 | Uses jQuery. |
| 3201 | Closes the current block/object/function. |
| 3202 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3203 | Uses jQuery. |
| 3204 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3205 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3206 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3207 | Closes the current block/object/function. |
| 3208 | Closes the current block/object/function. |
| 3209 | Defines object method sendAppleReceipt; it operates on the containing object's state. |
| 3210 | Starts a jQuery AJAX request. |
| 3211 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3212 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3213 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3214 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3215 | Defines object method success; it operates on the containing object's state. |
| 3216 | Begins a conditional branch. |
| 3217 | Reads or writes browser localStorage. |
| 3218 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3219 | Writes diagnostic information to the console. |
| 3220 | Writes diagnostic information to the console. |
| 3221 | Begins a conditional branch. |
| 3222 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3223 | Reads or writes browser localStorage. |
| 3224 | Invokes a function or method. |
| 3225 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3226 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3227 | Reads or writes browser localStorage. |
| 3228 | Invokes a function or method. |
| 3229 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3230 | Reads or writes browser localStorage. |
| 3231 | Closes the current block/object/function. |
| 3232 | Sends a cross-window message used by the SDK/game bridge. |
| 3233 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3234 | Writes diagnostic information to the console. |
| 3235 | Invokes a function or method. |
| 3236 | Closes the current block/object/function. |
| 3237 | Closes the current block/object/function. |
| 3238 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3239 | Closes the current block/object/function. |
| 3240 | Blank line used to separate logical code sections. |
| 3241 | Invokes a function or method. |
| 3242 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3243 | Begins iteration. |
| 3244 | Begins value-based multi-branch dispatch. |
| 3245 | Defines one switch branch. |
| 3246 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3247 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3248 | Defines one switch branch. |
| 3249 | Begins a conditional branch. |
| 3250 | Assigns a value to a variable or object property. |
| 3251 | Closes the current block/object/function. |
| 3252 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3253 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3254 | Defines the switch fallback branch. |
| 3255 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3256 | Closes the current block/object/function. |
| 3257 | Closes the current block/object/function. |
| 3258 | Blank line used to separate logical code sections. |
| 3259 | Closes the current block/object/function. |
| 3260 | Blank line used to separate logical code sections. |
| 3261 | Defines object method sendAfReport; it operates on the containing object's state. |
| 3262 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3263 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3264 | Assigns a value to a variable or object property. |
| 3265 | Begins a conditional branch. |
| 3266 | Writes diagnostic information to the console. |
| 3267 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3268 | Closes the current block/object/function. |
| 3269 | Blank line used to separate logical code sections. |
| 3270 | Begins a conditional branch. |
| 3271 | Comment only. It does not execute. |
| 3272 | Comment only. It does not execute. |
| 3273 | Comment only. It does not execute. |
| 3274 | Serializes or deserializes JSON. |
| 3275 | Writes diagnostic information to the console. |
| 3276 | Starts a jQuery AJAX request. |
| 3277 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3278 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3279 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3280 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3281 | Defines object method success; it operates on the containing object's state. |
| 3282 | Begins a conditional branch. |
| 3283 | Assigns a value to a variable or object property. |
| 3284 | Writes diagnostic information to the console. |
| 3285 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3286 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3287 | Begins a conditional branch. |
| 3288 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3289 | Closes the current block/object/function. |
| 3290 | Writes diagnostic information to the console. |
| 3291 | Closes the current block/object/function. |
| 3292 | Closes the current block/object/function. |
| 3293 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3294 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3295 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3296 | Writes diagnostic information to the console. |
| 3297 | Invokes a function or method. |
| 3298 | Closes the current block/object/function. |
| 3299 | Closes the current block/object/function. |
| 3300 | Defines object method sendFirebaseReport; it operates on the containing object's state. |
| 3301 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3302 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3303 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3304 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3305 | Closes the current block/object/function. |
| 3306 | Begins exception handling. |
| 3307 | Begins a conditional branch. |
| 3308 | Comment only. It does not execute. |
| 3309 | Serializes or deserializes JSON. |
| 3310 | Closes the current block/object/function. |
| 3311 | Begins an alternative conditional branch. |
| 3312 | Comment only. It does not execute. |
| 3313 | Serializes or deserializes JSON. |
| 3314 | Closes the current block/object/function. |
| 3315 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3316 | Comment only. It does not execute. |
| 3317 | Writes diagnostic information to the console. |
| 3318 | Closes the current block/object/function. |
| 3319 | Closes the current block/object/function. |
| 3320 | Defines object method sendGoogleReceipt; it operates on the containing object's state. |
| 3321 | Assigns a value to a variable or object property. |
| 3322 | Assigns a value to a variable or object property. |
| 3323 | Assigns a value to a variable or object property. |
| 3324 | Starts a jQuery AJAX request. |
| 3325 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3326 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3327 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3328 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3329 | Defines object method success; it operates on the containing object's state. |
| 3330 | Begins a conditional branch. |
| 3331 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3332 | Invokes a function or method. |
| 3333 | Writes diagnostic information to the console. |
| 3334 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3335 | Writes diagnostic information to the console. |
| 3336 | Invokes a function or method. |
| 3337 | Closes the current block/object/function. |
| 3338 | Closes the current block/object/function. |
| 3339 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3340 | Closes the current block/object/function. |
| 3341 | Defines object method sendOpenServiceAction; it operates on the containing object's state. |
| 3342 | Uses a browser DOM/window/navigation API. |
| 3343 | Closes the current block/object/function. |
| 3344 | Closes the current block/object/function. |
| 3345 | Blank line used to separate logical code sections. |
| 3346 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3347 | Block-comment text. It does not execute. |
| 3348 | Block-comment text. It does not execute. |
| 3349 | Block-comment text. It does not execute. |
| 3350 | Block-comment text. It does not execute. |
| 3351 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3352 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3353 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3354 | Closes the current block/object/function. |
| 3355 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3356 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3357 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3358 | Blank line used to separate logical code sections. |
| 3359 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3360 | Blank line used to separate logical code sections. |
| 3361 | Defines object method onInitOrderData; it operates on the containing object's state. |
| 3362 | Assigns a value to a variable or object property. |
| 3363 | Closes the current block/object/function. |
| 3364 | Blank line used to separate logical code sections. |
| 3365 | Block-comment text. It does not execute. |
| 3366 | Defines object method getGoogleIsReadyToPayRequest; it operates on the containing object's state. |
| 3367 | Returns a value and exits the current function. |
| 3368 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3369 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3370 | Closes the current block/object/function. |
| 3371 | Blank line used to separate logical code sections. |
| 3372 | Block-comment text. It does not execute. |
| 3373 | Defines object method getGooglePayConfig; it operates on the containing object's state. |
| 3374 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3375 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3376 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3377 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3378 | Closes the current block/object/function. |
| 3379 | Begins a conditional branch. |
| 3380 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3381 | Assigns a value to a variable or object property. |
| 3382 | Assigns a value to a variable or object property. |
| 3383 | Closes the current block/object/function. |
| 3384 | Assigns a value to a variable or object property. |
| 3385 | Assigns a value to a variable or object property. |
| 3386 | Returns a value and exits the current function. |
| 3387 | Closes the current block/object/function. |
| 3388 | Blank line used to separate logical code sections. |
| 3389 | Block-comment text. It does not execute. |
| 3390 | Defines object method getGooglePaymentDataRequest; it operates on the containing object's state. |
| 3391 | Comment only. It does not execute. |
| 3392 | Comment only. It does not execute. |
| 3393 | Comment only. It does not execute. |
| 3394 | Comment only. It does not execute. |
| 3395 | Comment only. It does not execute. |
| 3396 | Comment only. It does not execute. |
| 3397 | Comment only. It does not execute. |
| 3398 | Blank line used to separate logical code sections. |
| 3399 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3400 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3401 | Assigns a value to a variable or object property. |
| 3402 | Assigns a value to a variable or object property. |
| 3403 | Assigns a value to a variable or object property. |
| 3404 | Assigns a value to a variable or object property. |
| 3405 | Returns a value and exits the current function. |
| 3406 | Closes the current block/object/function. |
| 3407 | Blank line used to separate logical code sections. |
| 3408 | Defines object method onPaymentAuthorized; it operates on the containing object's state. |
| 3409 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3410 | Returns a value and exits the current function. |
| 3411 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3412 | Adds a Promise success continuation. |
| 3413 | Invokes a function or method. |
| 3414 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3415 | Adds a Promise failure handler. |
| 3416 | Invokes a function or method. |
| 3417 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3418 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3419 | Closes the current block/object/function. |
| 3420 | Blank line used to separate logical code sections. |
| 3421 | Defines object method getGooglePaymentsClient; it operates on the containing object's state. |
| 3422 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3423 | Begins a conditional branch. |
| 3424 | Assigns a value to a variable or object property. |
| 3425 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3426 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3427 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3428 | Closes the current block/object/function. |
| 3429 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3430 | Closes the current block/object/function. |
| 3431 | Returns a value and exits the current function. |
| 3432 | Closes the current block/object/function. |
| 3433 | Blank line used to separate logical code sections. |
| 3434 | Block-comment text. It does not execute. |
| 3435 | Block-comment text. It does not execute. |
| 3436 | Block-comment text. It does not execute. |
| 3437 | Block-comment text. It does not execute. |
| 3438 | Block-comment text. It does not execute. |
| 3439 | Block-comment text. It does not execute. |
| 3440 | Defines object method onGooglePayLoaded; it operates on the containing object's state. |
| 3441 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3442 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3443 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3444 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3445 | Adds a Promise success continuation. |
| 3446 | Begins a conditional branch. |
| 3447 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3448 | Closes the current block/object/function. |
| 3449 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3450 | Adds a Promise failure handler. |
| 3451 | Writes diagnostic information to the console. |
| 3452 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3453 | Closes the current block/object/function. |
| 3454 | Blank line used to separate logical code sections. |
| 3455 | Block-comment text. It does not execute. |
| 3456 | Block-comment text. It does not execute. |
| 3457 | Block-comment text. It does not execute. |
| 3458 | Defines object method addGooglePayButton; it operates on the containing object's state. |
| 3459 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3460 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3461 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3462 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3463 | Comment only. It does not execute. |
| 3464 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3465 | Uses a browser DOM/window/navigation API. |
| 3466 | Closes the current block/object/function. |
| 3467 | Blank line used to separate logical code sections. |
| 3468 | Defines object method getGoogleTransactionInfo; it operates on the containing object's state. |
| 3469 | Returns a value and exits the current function. |
| 3470 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3471 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3472 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3473 | Closes the current block/object/function. |
| 3474 | Closes the current block/object/function. |
| 3475 | Blank line used to separate logical code sections. |
| 3476 | Block-comment text. It does not execute. |
| 3477 | Defines object method onGooglePaymentButtonClicked; it operates on the containing object's state. |
| 3478 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3479 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3480 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3481 | Closes the current block/object/function. |
| 3482 | Blank line used to separate logical code sections. |
| 3483 | Defines object method processPayment; it operates on the containing object's state. |
| 3484 | Returns a value and exits the current function. |
| 3485 | Begins exception handling. |
| 3486 | Comment only. It does not execute. |
| 3487 | Starts an HTTP Fetch request. |
| 3488 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3489 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3490 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3491 | Closes the current block/object/function. |
| 3492 | Serializes or deserializes JSON. |
| 3493 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3494 | Blank line used to separate logical code sections. |
| 3495 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3496 | Comment only. It does not execute. |
| 3497 | Comment only. It does not execute. |
| 3498 | Comment only. It does not execute. |
| 3499 | Comment only. It does not execute. |
| 3500 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3501 | Adds a Promise success continuation. |
| 3502 | Writes diagnostic information to the console. |
| 3503 | Returns a value and exits the current function. |
| 3504 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3505 | Adds a Promise success continuation. |
| 3506 | Begins a conditional branch. |
| 3507 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3508 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3509 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3510 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3511 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3512 | Closes the current block/object/function. |
| 3513 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3514 | Blank line used to separate logical code sections. |
| 3515 | Closes the current block/object/function. |
| 3516 | Uses jQuery. |
| 3517 | Begins a conditional branch. |
| 3518 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3519 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3520 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3521 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3522 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3523 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3524 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3525 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3526 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3527 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3528 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3529 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3530 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3531 | Uses jQuery. |
| 3532 | Uses jQuery. |
| 3533 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3534 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3535 | Uses jQuery. |
| 3536 | Uses jQuery. |
| 3537 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3538 | Closes the current block/object/function. |
| 3539 | Writes diagnostic information to the console. |
| 3540 | Returns a value and exits the current function. |
| 3541 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3542 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3543 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3544 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3545 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3546 | Block-comment text. It does not execute. |
| 3547 | Begins a conditional branch. |
| 3548 | Assigns a value to a variable or object property. |
| 3549 | Assigns a value to a variable or object property. |
| 3550 | Starts an HTTP Fetch request. |
| 3551 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3552 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3553 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3554 | Closes the current block/object/function. |
| 3555 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3556 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3557 | Serializes or deserializes JSON. |
| 3558 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3559 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3560 | Adds a Promise success continuation. |
| 3561 | Adds a Promise success continuation. |
| 3562 | Writes diagnostic information to the console. |
| 3563 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3564 | Returns a value and exits the current function. |
| 3565 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3566 | Begins a conditional branch. |
| 3567 | Begins a conditional branch. |
| 3568 | Invokes a function or method. |
| 3569 | Closes the current block/object/function. |
| 3570 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3571 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3572 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3573 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3574 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3575 | Closes the current block/object/function. |
| 3576 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3577 | Blank line used to separate logical code sections. |
| 3578 | Comment only. It does not execute. |
| 3579 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3580 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3581 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3582 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3583 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3584 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3585 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3586 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3587 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3588 | Closes the current block/object/function. |
| 3589 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3590 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3591 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3592 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3593 | Blank line used to separate logical code sections. |
| 3594 | Uses jQuery. |
| 3595 | Invokes a function or method. |
| 3596 | Closes the current block/object/function. |
| 3597 | Begins the fallback branch. |
| 3598 | Comment only. It does not execute. |
| 3599 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3600 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3601 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3602 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3603 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3604 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3605 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3606 | Closes the current block/object/function. |
| 3607 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3608 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3609 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3610 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3611 | Invokes a function or method. |
| 3612 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3613 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3614 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3615 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3616 | Closes the current block/object/function. |
| 3617 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3618 | Closes the current block/object/function. |
| 3619 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3620 | Invokes a function or method. |
| 3621 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3622 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3623 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3624 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3625 | Closes the current block/object/function. |
| 3626 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3627 | Closes the current block/object/function. |
| 3628 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3629 | Invokes a function or method. |
| 3630 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3631 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3632 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3633 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3634 | Closes the current block/object/function. |
| 3635 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3636 | Closes the current block/object/function. |
| 3637 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3638 | Closes the current block/object/function. |
| 3639 | Closes the current block/object/function. |
| 3640 | Blank line used to separate logical code sections. |
| 3641 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3642 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3643 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3644 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3645 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3646 | Blank line used to separate logical code sections. |
| 3647 | Defines object method onInitApplePayData; it operates on the containing object's state. |
| 3648 | Assigns a value to a variable or object property. |
| 3649 | Assigns a value to a variable or object property. |
| 3650 | Closes the current block/object/function. |
| 3651 | Blank line used to separate logical code sections. |
| 3652 | Defines object method onShowApplePayButton; it operates on the containing object's state. |
| 3653 | Writes diagnostic information to the console. |
| 3654 | Begins a conditional branch. |
| 3655 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3656 | Closes the current block/object/function. |
| 3657 | Closes the current block/object/function. |
| 3658 | Blank line used to separate logical code sections. |
| 3659 | Defines object method onCheckIsSupportApplePay; it operates on the containing object's state. |
| 3660 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3661 | Begins a conditional branch. |
| 3662 | Writes diagnostic information to the console. |
| 3663 | Assigns a value to a variable or object property. |
| 3664 | Closes the current block/object/function. |
| 3665 | Begins a conditional branch. |
| 3666 | Writes diagnostic information to the console. |
| 3667 | Assigns a value to a variable or object property. |
| 3668 | Closes the current block/object/function. |
| 3669 | Returns a value and exits the current function. |
| 3670 | Closes the current block/object/function. |
| 3671 | Blank line used to separate logical code sections. |
| 3672 | Defines object method onCheckIsPayEligibleAndShowButton; it operates on the containing object's state. |
| 3673 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3674 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3675 | Assigns a value to a variable or object property. |
| 3676 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3677 | Adds a Promise success continuation. |
| 3678 | Assigns a value to a variable or object property. |
| 3679 | Writes diagnostic information to the console. |
| 3680 | Begins a conditional branch. |
| 3681 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3682 | Closes the current block/object/function. |
| 3683 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3684 | Adds a Promise failure handler. |
| 3685 | Writes diagnostic information to the console. |
| 3686 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3687 | Closes the current block/object/function. |
| 3688 | Blank line used to separate logical code sections. |
| 3689 | Defines object method onAddApplePayButton; it operates on the containing object's state. |
| 3690 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3691 | Uses a browser DOM/window/navigation API. |
| 3692 | Uses jQuery. |
| 3693 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3694 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3695 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3696 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3697 | Closes the current block/object/function. |
| 3698 | Blank line used to separate logical code sections. |
| 3699 | Defines object method onClickApplePay; it operates on the containing object's state. |
| 3700 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3701 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3702 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3703 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3704 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3705 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3706 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3707 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3708 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3709 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3710 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3711 | Closes the current block/object/function. |
| 3712 | Closes the current block/object/function. |
| 3713 | Blank line used to separate logical code sections. |
| 3714 | Writes diagnostic information to the console. |
| 3715 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3716 | Writes diagnostic information to the console. |
| 3717 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3718 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3719 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3720 | Closes the current block/object/function. |
| 3721 | Blank line used to separate logical code sections. |
| 3722 | Defines object method onOnvalidatemerchantCallback; it operates on the containing object's state. |
| 3723 | Defines an arrow-function callback. |
| 3724 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3725 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3726 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3727 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3728 | Adds a Promise success continuation. |
| 3729 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3730 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3731 | Adds a Promise failure handler. |
| 3732 | Writes diagnostic information to the console. |
| 3733 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3734 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3735 | Closes the current block/object/function. |
| 3736 | Closes the current block/object/function. |
| 3737 | Blank line used to separate logical code sections. |
| 3738 | Defines object method onPaymentauthorizedCallback; it operates on the containing object's state. |
| 3739 | Defines an arrow-function callback. |
| 3740 | Writes diagnostic information to the console. |
| 3741 | Writes diagnostic information to the console. |
| 3742 | Writes diagnostic information to the console. |
| 3743 | Starts an HTTP Fetch request. |
| 3744 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3745 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3746 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3747 | Closes the current block/object/function. |
| 3748 | Serializes or deserializes JSON. |
| 3749 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3750 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3751 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3752 | Adds a Promise success continuation. |
| 3753 | Adds a Promise success continuation. |
| 3754 | Begins a conditional branch. |
| 3755 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3756 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3757 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3758 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3759 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3760 | Closes the current block/object/function. |
| 3761 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3762 | Blank line used to separate logical code sections. |
| 3763 | Closes the current block/object/function. |
| 3764 | Begins a conditional branch. |
| 3765 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3766 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3767 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3768 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3769 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3770 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3771 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3772 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3773 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3774 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3775 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3776 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3777 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3778 | Uses jQuery. |
| 3779 | Uses jQuery. |
| 3780 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3781 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3782 | Uses jQuery. |
| 3783 | Uses jQuery. |
| 3784 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3785 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3786 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3787 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3788 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3789 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3790 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3791 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3792 | Adds a Promise success continuation. |
| 3793 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3794 | Assigns a value to a variable or object property. |
| 3795 | Assigns a value to a variable or object property. |
| 3796 | Starts an HTTP Fetch request. |
| 3797 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3798 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3799 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3800 | Closes the current block/object/function. |
| 3801 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3802 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3803 | Serializes or deserializes JSON. |
| 3804 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3805 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3806 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3807 | Adds a Promise success continuation. |
| 3808 | Adds a Promise success continuation. |
| 3809 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3810 | Comment only. It does not execute. |
| 3811 | Begins a conditional branch. |
| 3812 | Begins a conditional branch. |
| 3813 | Invokes a function or method. |
| 3814 | Closes the current block/object/function. |
| 3815 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3816 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3817 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3818 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3819 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3820 | Closes the current block/object/function. |
| 3821 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3822 | Blank line used to separate logical code sections. |
| 3823 | Comment only. It does not execute. |
| 3824 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3825 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3826 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3827 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3828 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3829 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3830 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3831 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3832 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3833 | Closes the current block/object/function. |
| 3834 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3835 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3836 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3837 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3838 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3839 | Comment only. It does not execute. |
| 3840 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3841 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3842 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3843 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3844 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3845 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3846 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3847 | Closes the current block/object/function. |
| 3848 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3849 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3850 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3851 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3852 | Invokes a function or method. |
| 3853 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3854 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3855 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3856 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3857 | Closes the current block/object/function. |
| 3858 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3859 | Closes the current block/object/function. |
| 3860 | Uses jQuery. |
| 3861 | Writes diagnostic information to the console. |
| 3862 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3863 | Adds a Promise failure handler. |
| 3864 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3865 | Adds a Promise failure handler. |
| 3866 | Begins a conditional branch. |
| 3867 | Writes diagnostic information to the console. |
| 3868 | Writes diagnostic information to the console. |
| 3869 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3870 | Closes the current block/object/function. |
| 3871 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3872 | Closes the current block/object/function. |
| 3873 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3874 | Closes the current block/object/function. |
| 3875 | Closes the current block/object/function. |
| 3876 | Blank line used to separate logical code sections. |
| 3877 | Closes the current block/object/function. |
| 3878 | Blank line used to separate logical code sections. |
| 3879 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3880 | Defines object method init; it operates on the containing object's state. |
| 3881 | Comment only. It does not execute. |
| 3882 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3883 | Comment only. It does not execute. |
| 3884 | Uses a browser DOM/window/navigation API. |
| 3885 | Adds a Promise success continuation. |
| 3886 | Begins a conditional branch. |
| 3887 | Assigns a value to a variable or object property. |
| 3888 | Writes diagnostic information to the console. |
| 3889 | Closes the current block/object/function. |
| 3890 | Adds a Promise failure handler. |
| 3891 | Assigns a value to a variable or object property. |
| 3892 | Writes diagnostic information to the console. |
| 3893 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3894 | Comment only. It does not execute. |
| 3895 | Comment only. It does not execute. |
| 3896 | Closes the current block/object/function. |
| 3897 | Blank line used to separate logical code sections. |
| 3898 | Defines object method reportEvent; it operates on the containing object's state. |
| 3899 | Begins a conditional branch. |
| 3900 | Begins value-based multi-branch dispatch. |
| 3901 | Defines one switch branch. |
| 3902 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3903 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3904 | Defines one switch branch. |
| 3905 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3906 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3907 | Defines one switch branch. |
| 3908 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3909 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3910 | Defines one switch branch. |
| 3911 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3912 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3913 | Defines the switch fallback branch. |
| 3914 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3915 | Closes the current block/object/function. |
| 3916 | Closes the current block/object/function. |
| 3917 | Closes the current block/object/function. |
| 3918 | Blank line used to separate logical code sections. |
| 3919 | Comment only. It does not execute. |
| 3920 | Defines object method dw_event_register; it operates on the containing object's state. |
| 3921 | Adds a Promise success continuation. |
| 3922 | Writes diagnostic information to the console. |
| 3923 | Adds a Promise failure handler. |
| 3924 | Writes diagnostic information to the console. |
| 3925 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3926 | Closes the current block/object/function. |
| 3927 | Blank line used to separate logical code sections. |
| 3928 | Comment only. It does not execute. |
| 3929 | Defines object method dw_event_login; it operates on the containing object's state. |
| 3930 | Adds a Promise success continuation. |
| 3931 | Writes diagnostic information to the console. |
| 3932 | Adds a Promise failure handler. |
| 3933 | Writes diagnostic information to the console. |
| 3934 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3935 | Closes the current block/object/function. |
| 3936 | Blank line used to separate logical code sections. |
| 3937 | Comment only. It does not execute. |
| 3938 | Defines object method dw_event_purchase; it operates on the containing object's state. |
| 3939 | Adds a Promise success continuation. |
| 3940 | Writes diagnostic information to the console. |
| 3941 | Adds a Promise failure handler. |
| 3942 | Writes diagnostic information to the console. |
| 3943 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3944 | Closes the current block/object/function. |
| 3945 | Blank line used to separate logical code sections. |
| 3946 | Comment only. It does not execute. |
| 3947 | Defines object method dw_event_payment; it operates on the containing object's state. |
| 3948 | Adds a Promise success continuation. |
| 3949 | Writes diagnostic information to the console. |
| 3950 | Adds a Promise failure handler. |
| 3951 | Writes diagnostic information to the console. |
| 3952 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3953 | Closes the current block/object/function. |
| 3954 | Blank line used to separate logical code sections. |
| 3955 | Comment only. It does not execute. |
| 3956 | Defines object method dw_event_subscribe; it operates on the containing object's state. |
| 3957 | Adds a Promise success continuation. |
| 3958 | Writes diagnostic information to the console. |
| 3959 | Adds a Promise failure handler. |
| 3960 | Writes diagnostic information to the console. |
| 3961 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3962 | Closes the current block/object/function. |
| 3963 | Closes the current block/object/function. |
| 3964 | Blank line used to separate logical code sections. |
| 3965 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3966 | Blank line used to separate logical code sections. |
| 3967 | Defines object method fbqInit; it operates on the containing object's state. |
| 3968 | Comment only. It does not execute. |
| 3969 | Uses a browser DOM/window/navigation API. |
| 3970 | Assigns a value to a variable or object property. |
| 3971 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3972 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3973 | Begins a conditional branch. |
| 3974 | Assigns a value to a variable or object property. |
| 3975 | Assigns a value to a variable or object property. |
| 3976 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3977 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3978 | Invokes a function or method. |
| 3979 | Invokes a function or method. |
| 3980 | Uses a browser DOM/window/navigation API. |
| 3981 | Closes the current block/object/function. |
| 3982 | Blank line used to separate logical code sections. |
| 3983 | Defines object method reportEvent; it operates on the containing object's state. |
| 3984 | Begins value-based multi-branch dispatch. |
| 3985 | Defines one switch branch. |
| 3986 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3987 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3988 | Defines one switch branch. |
| 3989 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3990 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3991 | Defines one switch branch. |
| 3992 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3993 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3994 | Defines the switch fallback branch. |
| 3995 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 3996 | Closes the current block/object/function. |
| 3997 | Closes the current block/object/function. |
| 3998 | Blank line used to separate logical code sections. |
| 3999 | Defines object method fbq_event_viewContent; it operates on the containing object's state. |
| 4000 | Begins a conditional branch. |
| 4001 | Invokes a function or method. |
| 4002 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4003 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4004 | Comment only. It does not execute. |
| 4005 | Comment only. It does not execute. |
| 4006 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4007 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4008 | Writes diagnostic information to the console. |
| 4009 | Closes the current block/object/function. |
| 4010 | Closes the current block/object/function. |
| 4011 | Blank line used to separate logical code sections. |
| 4012 | Defines object method fbq_event_completeRegistration; it operates on the containing object's state. |
| 4013 | Begins a conditional branch. |
| 4014 | Invokes a function or method. |
| 4015 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4016 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4017 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4018 | Writes diagnostic information to the console. |
| 4019 | Closes the current block/object/function. |
| 4020 | Closes the current block/object/function. |
| 4021 | Blank line used to separate logical code sections. |
| 4022 | Defines object method fbq_event_purchase; it operates on the containing object's state. |
| 4023 | Begins a conditional branch. |
| 4024 | Invokes a function or method. |
| 4025 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4026 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4027 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4028 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4029 | Writes diagnostic information to the console. |
| 4030 | Closes the current block/object/function. |
| 4031 | Closes the current block/object/function. |
| 4032 | Closes the current block/object/function. |
| 4033 | Blank line used to separate logical code sections. |
| 4034 | Defines function showTk, creating a reusable operation. |
| 4035 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4036 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4037 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4038 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4039 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4040 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4041 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4042 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4043 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4044 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4045 | Uses jQuery. |
| 4046 | Uses jQuery. |
| 4047 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4048 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4049 | Schedules delayed execution. |
| 4050 | Comment only. It does not execute. |
| 4051 | Uses jQuery. |
| 4052 | Uses jQuery. |
| 4053 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4054 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4055 | Closes the current block/object/function. |
| 4056 | Blank line used to separate logical code sections. |
| 4057 | Defines function setSDKLanguage, creating a reusable operation. |
| 4058 | Comment only. It does not execute. |
| 4059 | Uses a browser DOM/window/navigation API. |
| 4060 | Writes diagnostic information to the console. |
| 4061 | Defines function containsIgnoreCase, creating a reusable operation. |
| 4062 | Returns a value and exits the current function. |
| 4063 | Closes the current block/object/function. |
| 4064 | Comment only. It does not execute. |
| 4065 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4066 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4067 | Begins a conditional branch. |
| 4068 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4069 | Writes diagnostic information to the console. |
| 4070 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4071 | Begins a conditional branch. |
| 4072 | Begins a conditional branch. |
| 4073 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4074 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4075 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4076 | Closes the current block/object/function. |
| 4077 | Writes diagnostic information to the console. |
| 4078 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4079 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4080 | Writes diagnostic information to the console. |
| 4081 | Closes the current block/object/function. |
| 4082 | Closes the current block/object/function. |
| 4083 | Closes the current block/object/function. |
| 4084 | Invokes a function or method. |
| 4085 | Blank line used to separate logical code sections. |
| 4086 | Comment only. It does not execute. |
| 4087 | Uses a browser DOM/window/navigation API. |
| 4088 | Begins a conditional branch. |
| 4089 | Serializes or deserializes JSON. |
| 4090 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4091 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4092 | Closes the current block/object/function. |
| 4093 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4094 | Closes the current block/object/function. |
| 4095 | Blank line used to separate logical code sections. |
| 4096 | Comment only. It does not execute. |
| 4097 | Uses a browser DOM/window/navigation API. |
| 4098 | Writes diagnostic information to the console. |
| 4099 | Begins a conditional branch. |
| 4100 | Serializes or deserializes JSON. |
| 4101 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4102 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4103 | Closes the current block/object/function. |
| 4104 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4105 | Closes the current block/object/function. |
| 4106 | Blank line used to separate logical code sections. |
| 4107 | Comment only. It does not execute. |
| 4108 | Uses a browser DOM/window/navigation API. |
| 4109 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4110 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4111 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4112 | Closes the current block/object/function. |
| 4113 | Blank line used to separate logical code sections. |
| 4114 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4115 | Closes the current block/object/function. |
| 4116 | Blank line used to separate logical code sections. |
| 4117 | Uses a browser DOM/window/navigation API. |
| 4118 | Writes diagnostic information to the console. |
| 4119 | Reads or writes browser localStorage. |
| 4120 | Begins a conditional branch. |
| 4121 | Invokes a function or method. |
| 4122 | Closes the current block/object/function. |
| 4123 | Closes the current block/object/function. |
| 4124 | Blank line used to separate logical code sections. |
| 4125 | Uses a browser DOM/window/navigation API. |
| 4126 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4127 | Uses jQuery. |
| 4128 | Reads or writes browser localStorage. |
| 4129 | Begins a conditional branch. |
| 4130 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4131 | Reads or writes browser localStorage. |
| 4132 | Writes diagnostic information to the console. |
| 4133 | Invokes a function or method. |
| 4134 | Closes the current block/object/function. |
| 4135 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4136 | Closes the current block/object/function. |
| 4137 | Blank line used to separate logical code sections. |
| 4138 | Registers a browser/runtime event listener. |
| 4139 | Comment only. It does not execute. |
| 4140 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4141 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4142 | Blank line used to separate logical code sections. |
| 4143 | Begins value-based multi-branch dispatch. |
| 4144 | Defines one switch branch. |
| 4145 | Writes diagnostic information to the console. |
| 4146 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4147 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4148 | Defines one switch branch. |
| 4149 | Writes diagnostic information to the console. |
| 4150 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4151 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4152 | Defines one switch branch. |
| 4153 | Writes diagnostic information to the console. |
| 4154 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4155 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4156 | Defines one switch branch. |
| 4157 | Writes diagnostic information to the console. |
| 4158 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4159 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4160 | Defines one switch branch. |
| 4161 | Writes diagnostic information to the console. |
| 4162 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4163 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4164 | Defines one switch branch. |
| 4165 | Writes diagnostic information to the console. |
| 4166 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4167 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4168 | Defines one switch branch. |
| 4169 | Writes diagnostic information to the console. |
| 4170 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4171 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4172 | Defines one switch branch. |
| 4173 | Writes diagnostic information to the console. |
| 4174 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4175 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4176 | Defines one switch branch. |
| 4177 | Writes diagnostic information to the console. |
| 4178 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4179 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4180 | Defines one switch branch. |
| 4181 | Writes diagnostic information to the console. |
| 4182 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4183 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4184 | Defines the switch fallback branch. |
| 4185 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4186 | Closes the current block/object/function. |
| 4187 | Executable JavaScript or structural syntax; exact effect depends on its surrounding context. |
| 4188 | Blank line used to separate logical code sections. |
| 4189 | Blank line used to separate logical code sections. |

## Rebuild-critical verified behavior

- getSign adds the current Unix-second timestamp, sorts keys, URL-encodes key/value pairs, appends the decoded APIK, and MD5-hashes the result.
- init waits for remote configuration, requests language data, validates game parameters, creates/recovers a UUID, and populates SDK base parameters.
- Successful login constructs a compact login result and sends a mjlogin postMessage into the game bridge.
- The presence of an API/action in this file proves the client can call it, not that the action is required during startup. Runtime traces remain the authority for startup behavior.
