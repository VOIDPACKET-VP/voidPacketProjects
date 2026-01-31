#include <stdio.h>
#include <math.h>
#define max(a, b) (a > b ? a : b)
int main(){
    int n;
    int one = 0, two = 0, three = 0, four = 0;
    int group, taxi = 0;
    scanf("%d", &n);

    for (int i = 0; i < n; i++){
        scanf("%d", &group);
        if (group == 1){
            one++;
        } else if (group == 2){
            two++;
        } else if (group == 3){
            three++;
        } else {
            four++;
        }
    }

    // Groupe of 4
    taxi += four;
    four = 0;

    // Groupe of 3
    taxi += three;
    one = max(0, one - three);
    three = 0;

    // Groupe of 2
    taxi += two/2;
    two = two % 2;

    // Leftover Group of 2
    if (two == 1) taxi += 1;
    one = max(0, one - 2);

    // Leftover Group of 1
    taxi += ceil((one + 3) / 4);

    printf("%d", taxi);

    return 0;
}