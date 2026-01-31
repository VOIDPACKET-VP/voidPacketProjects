// 4A - Watermelon
// #include <stdio.h>
// int main(){
//     int w;
//     scanf("%d", &w);
//     if (1 <= w <= 100){
//         if (w > 2 && w % 2 == 0){
//             printf("YES");
//         } else {
//             printf("NO");
//         }
//     }
//     return 0;
// }

// 71A - Way Too Long Words
// #include <stdio.h>
// #include <string.h>
// int main() {
//     int n;
//     scanf("%d", &n);
//     while (n--) {
//         char word[101];
//         scanf("%s", word);
//         int len = strlen(word);
//         if (len > 10) {
//             printf("%c%d%c\n", word[0], len-2, word[len-1]);
//         } else {
//             printf("%s\n", word);
//         }
//     }
//     return 0;
// }

// 231A - Team
// #include <stdio.h>
// int main(){
//     int n;
//     int count = 0;
//     scanf("%d", &n);
//     for (int i = 0; i < n; i++){
//         int a,b,c;
//         scanf("%d %d %d", &a, &b, &c);
//         if (a + b + c >= 2){
//             count++;
//         }
//     }
//     printf("%d", count);
//     return 0;
// }

// 282A - Bit++
// #include <stdio.h>
// int main(){
//     int n;
//     int x = 0;
//     scanf("%d", &n);
//     for (int i = 0; i < n; i++){
//         char stat[4];
//         scanf("%s", stat);
//         if (stat[1] == '+'){
//             x++;
//         } else {
//             x--;
//         }
//     }
//     printf("%d", x);
//     return 0;
// }

// 158A - Next Round
// #include <stdio.h>
// int main(){
//     int n, k, count = 0;
//     scanf("%d %d", &n, &k);

//     int scores[n];
//     for (int i = 0; i < n; i++){
//         scanf("%d", &scores[i]);
//     }
//     for (int i = 0; i < n; i++){
//         if (scores[i] >= scores[k-1] && scores[k-1] > 0){
//             count++;
//         } else {
//             break;
//         }
//     }
//     printf("%d", count);
//     return 0;
// }

// 50A - Domino Piling
// #include <stdio.h>
// int main(){
//     int m, n;
//     scanf("%d %d", &m, &n);
    
//     int max = (m * n) / 2;
//     printf("%d", max);
//     return 0;
// }


// 1A - Theatre Square
// #include <stdio.h>
// int main(){
// 	unsigned long long n, m, a = 1;
//     unsigned long long na, ma, res = 0;
//     scanf("%llu %llu %llu", &n, &m, &a);
//     na = n/a;
//     if (n%a != 0)
//         na++;
//     ma = m/a;
//     if (m%a != 0)
//         ma++;
//     res = na * ma;
//     printf("%llu", res);
//     return 0;
// }

// 263A - Beautiful Matrix
// #include <stdio.h>
// #include <math.h>
// int main(){
//     int arr[5][5];
//     int isStopped = 0;
//     for (int i = 0; i < 5; i++){
//         for (int j = 0; j < 5; j++){
//             scanf("%d", &arr[i][j]);
//             if (arr[i][j] == 1){
//                 printf("%d", abs(i-3) + abs(j-3));
//                 isStopped = 1;
//                 break;
//             }
//         }
//         if (isStopped){
//             break;
//         }

//     }
//     return 0;
// }

// 112A - Petya and Strings
// #include <stdio.h>
// #include <string.h>
// #include <ctype.h>
// int main(){
//     char string1[101], string2[101];

//     scanf("%s", string1);
//     scanf("%s", string2);
//     for (int i = 0; string1[i] != '\0'; i++) string1[i] = tolower(string1[i]);
//     for (int i = 0; string2[i] != '\0'; i++) string2[i] = tolower(string2[i]);

//     int result = strcmp(string1, string2);

//     printf("%d", result == 0 ? 0 : result > 0 ? 1 : -1);

//     return 0;
// }

// 236A - Boy or Girl
// #include <stdio.h>
// #include <string.h>
// int hasRepeatedChars(const char* str) {
//     int seen[26] = {0}; 
//     int count = 0;
//     for (int i = 0; str[i]; i++) {
//         int currentChar = str[i] - 'a';
//         if (seen[currentChar] == 0) {
//             seen[currentChar] = 1;
//             count ++;
//         }
//     }
//     return count; 
// }
// int main(){
//     char string[101];
//     scanf("%s", string);
//     int newResult = hasRepeatedChars(string);
//     printf("%s", newResult % 2 == 0 ? "CHAT WITH HER!" : "IGNORE HIM!");
//     return 0;
// }

// 339A - Helpful Maths
// #include <stdio.h>
// #include <stdlib.h>
// int compare(const void *a, const void *b){
//     int int_a = *(int*)a;
//     int int_b = *(int*)b;

//     if (int_a > int_b) return 1;
//     if (int_a < int_b) return -1;

//     return 0;
// }
// int main(){
//     char string[101];
//     int sorted[101];
//     int j = 0;

//     scanf("%s", string);
    
//     for (int i = 0; string[i]; i++){
//         if (string[i] != '+'){
//             sorted[j] = string[i];
//             j++;
//         } 
//     }

//     qsort(sorted, j, sizeof(int), compare);

//     for (int i = 0; i < j; i++){
//         printf("%c", sorted[i]);
//         if (i < j - 1){
//             printf("+");
//         }
//     }

//     return 0;
// }

// 617A - Elephant
// #include <stdio.h>
// #include <math.h>
// int main(){
//     int x;
//     scanf("%d", &x);
//     float num = (float)x/5;  
//     float steps = ceil(num);
//     printf("%d", (int)steps);    
//     return 0;
// }

// 118A - String Task 
// #include <stdio.h>
// #include <ctype.h>
// int main(){
//     char string[101], sorted[101];
//     int j = 0;
//     scanf("%s", string);
    
//     for (int i = 0; string[i] != '\0'; i++) string[i] = tolower(string[i]);

//     for (int i = 0; string[i]; i++){
//         if (string[i] != 'a' && string[i] != 'o' && string[i] != 'y' && string[i] != 'e' && string[i] != 'u' && string[i] != 'i'){
//             sorted[j] = string[i];
//             j++;
//         } 
//     }

//     for (int i = 0; i < j; i++){
//         printf(".%c", sorted[i]);
//     }

//     return 0;
// }

// 69A - Young Physicist
// #include <stdio.h>
// int main(){
//     int n, x,y,z, X = 0,Y = 0,Z = 0;
//     scanf("%d", &n);

//     for (int i = 0; i < n; i++){
//         scanf("%d %d %d", &x, &y, &z);
//         X += x;
//         Y += y;
//         Z += z;
//     }

//     if (X == 0 && Y == 0 && Z == 0){
//         printf("YES");
//     } else {
//         printf("NO");
//     }
    
//     return 0;
// }

// 96A - Football
// #include <stdio.h>
// #include <string.h>
// int main(){
//     char string[101];
//     int lvl = 1;
//     scanf("%s", string);

//     for (int i = 0; i < strlen(string) - 1; i++){
//         if (string[i] == string[i+1]){
//             lvl += 1;
//             if (lvl >= 7){
//                 printf("YES");
//                 break;
//             }
//         } else {
//             lvl = 1;
//         }        
//     }
//     if (lvl < 7) printf("NO");
//     return 0;
// }

// 58A - Chat room
// #include <stdio.h>
// #include <ctype.h>
// int main(){
//     char s[101];
//     char target[] = "hello"; 
//     int target_i = 0; 
//     scanf("%s", s);
//     for (int i = 0; s[i]; i++) s[i] = tolower(s[i]);
//     for (int i = 0; s[i]; i++){
//         if (s[i] == target[target_i]){
//             target_i++;
//         }
//         if (target_i == 5){
//             break;
//         }
//     }

//     if (target_i == 5){
//         printf("YES");
//     } else {
//         printf("NO");
//     }

//     return 0;
// }

// 160A - Twins
// #include <stdio.h>
// #include <stdlib.h>
// int compare(const int* a, const int* b){
//     return *(int*)b -*(int*)a;
// }
// int main(){
//     int n;
//     int coins[100], total = 0;
//     scanf("%d", &n);

//     for (int i = 0; i < n; i++){
//         scanf("%d", &coins[i]);
//         total += coins[i];
//     }

//     qsort(coins, n, sizeof(int), compare);

//     int mySum = 0, count = 0;

//     for (int i = 0; i < n; i++){
//         mySum += coins[i];
//         count++;
//         if (mySum > total - mySum){
//             printf("%d", count);
//             break;
//         }
//     }
//     return 0;
// }

// 479A - Expression
// #include <stdio.h>
// int main(){
//     int a, b, c;
//     scanf("%d", &a);
//     scanf("%d", &b);
//     scanf("%d", &c);

//     int array[6], max;

//     array[0] = a + b + c;
//     array[1] = a + b * c;
//     array[2] = a * b + c;
//     array[3] = a * b * c;
//     array[4] = (a + b) * c;
//     array[5] = a * (b + c);

//     max = array[0];

//     for (int i = 0; i < 6; i++){
//         if (array[i] > max){
//             max = array[i];
//         }
//     }
//     printf("%d", max);
//     return 0;
// }

// 133A - HQ9+
// #include <stdio.h>
// #include <string.h>
// int main(){
//     char p[100];
//     scanf("%s", p);

//     for (int i = 0; i < strlen(p); i++){
//         if (p[i] == 'H'||p[i] == 'Q'||p[i] == '9'){
//             printf("YES");
//             return 0;
//         } 
//     }

//     printf("NO");
//     return 0;
// }

// 318A - Even Odds
// #include <stdio.h>
// int main(){
//     long long n, k;
//     scanf("%lld %lld", &n, &k);
//     long long odd = (n + 1) / 2;
//     if (k <= odd){
//         printf("%lld", 2 * k -1);
//     } else {
//         printf("%lld", 2* (k - odd));
//     }
//     return 0;
// }

// 208A - Dubstep
// #include <stdio.h>
// #include <string.h>
// int main() {
//     char dub[201];  
//     scanf("%s", dub);
    
//     char nonDub[201];
//     int nonDub_i = 0;
//     int len = strlen(dub);
    
//     for (int i = 0; i < len; i++) {
//         if (i + 2 < len && dub[i] == 'W' && dub[i+1] == 'U' && dub[i+2] == 'B') {
//             i += 2;

//             if (nonDub_i > 0 && nonDub[nonDub_i-1] != ' ') {
//                 nonDub[nonDub_i] = ' ';
//                 nonDub_i++;
//             }
//         } else {
//             nonDub[nonDub_i] = dub[i];
//             nonDub_i++;
//         }
//     }

//     nonDub[nonDub_i] = '\0';
    
//     if (nonDub_i > 0 && nonDub[nonDub_i-1] == ' ') {
//         nonDub[nonDub_i-1] = '\0';
//     }
    
//     printf("%s\n", nonDub);
//     return 0;
// }

// 25A - Taxi
// #include <stdio.h>
// #include <stdlib.h>
// int main(){
//     int n, even = 0, odd = 0;
//     int e = 0, o = 0;
//     int *numbers;

//     scanf("%d", &n);
//     numbers = (int *)malloc(n * sizeof(int));

//     if (numbers == NULL){
//         return 1;
//     }

//     for (int i = 0; i < n; i++){
//         scanf("%d", &numbers[i]);
//         if (numbers[i] % 2 == 0){
//             even++;
//             e = i + 1;
//         } else {
//             odd++;
//             o = i + 1;
//         }
//     }

//     if (odd == 1){
//         printf("%d", o);
//     } else {
//         printf("%d", e);
//     }


//     free(numbers);
//     numbers = NULL;

//     return 0;
// }

// 158B - Taxi
// #include <stdio.h>
// int main(){
//     int n;
//     int one = 0, two = 0, three = 0, four = 0;
//     int group, taxi = 0;
//     scanf("%d", &n);

//     for (int i = 0; i < n; i++){
//         scanf("%d", &group);
//         if (group == 1){
//             one++;
//         } else if (group == 2){
//             two++;
//         } else if (group == 3){
//             three++;
//         } else {
//             four++;
//         }
//     }

//     // Groupe of 4
//     taxi += four;

//     // Groupe of 3
//     taxi += three;
//     if (one > three) one -= three;
//     else one = 0;

//     // Groupe of 2
//     taxi += two / 2;
//     two = two % 2;

//     // Leftover Group of 2
//     if (two == 1){
//         taxi++;
//         if (one >= 2){
//             one -= 2;
//         } else if (one == 1){
//             one -= 1;
//         }
//     }

//     // Leftover Group of 1
//     taxi += (one + 3) / 4;

//     printf("%d", taxi);

//     return 0;
// }