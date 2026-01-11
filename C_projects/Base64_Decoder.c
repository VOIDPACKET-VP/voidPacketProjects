#include <stdio.h>
#include <string.h>

int main(){

    int age = 0;
    float gpa = 0.0f;
    char grade = '\0';
    char name[30] = "";

    printf("Enter your age, gpa, grade and name :\n");
    scanf("%d", &age);
    scanf("%f", &gpa);
    scanf(" %c", &grade);
    getchar();
    fgets(name, sizeof(name), stdin);

    printf("%d\n", age);
    printf("%.2f\n", gpa);
    printf("%c\n", grade);
    printf("%s\n", name);

    return 0;
}