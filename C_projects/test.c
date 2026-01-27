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