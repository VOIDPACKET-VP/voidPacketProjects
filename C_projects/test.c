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