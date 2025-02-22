import React, { useState } from 'react';
import { BookOpen, Code2, ChevronRight, GraduationCap, BookCheck, FolderTree, CheckCircle2 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('program');
  const [activeCategory, setActiveCategory] = useState('podstawy');
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  const categories = {
    podstawy: {
      title: 'Podstawy C++',
      icon: Code2,
    },
    algorytmika: {
      title: 'Algorytmika',
      icon: FolderTree,
    },
    algorytmy_szczegolne: {
      title: 'Algorytmy Szczególne',
      icon: BookOpen,
    }
  };

  const sections = {
    podstawy: {
      program: {
        title: 'Budowa Programu Komputerowego',
        content: `#include <iostream>
using namespace std;

int main() {
    cout << "Witaj świecie!" << endl;
    return 0;
}`,
        explanation: 'Każdy program w C++ musi zawierać funkcję main(), która jest punktem startowym programu. Funkcja ta jest wywoływana przez system operacyjny, gdy program jest uruchamiany. Wewnątrz funkcji main() można umieszczać kod, który ma być wykonany. W C++ używamy cout do wyświetlania tekstu na standardowym wyjściu (zwykle na ekranie), a endl do dodawania nowej linii oraz opróżniania bufora wyjściowego. Program kończy się zwróceniem wartości 0, co oznacza, że zakończył się pomyślnie.'
      },
      codeblocks: {
        title: 'Obsługa Środowiska Code::Blocks',
        content: `// 1. Utworzenie nowego projektu
// File -> New -> Project -> Console Application
// 2. Kompilacja: F9
// 3. Uruchomienie: Ctrl + F10`,
        explanation: 'Code::Blocks to popularne środowisko programistyczne dla C++, które wspiera wiele kompilatorów, w tym GCC i MSVC. Oferuje funkcje takie jak automatyczne uzupełnianie kodu, podświetlanie składni oraz możliwość debugowania. Użytkownicy mogą łatwo tworzyć nowe projekty, zarządzać plikami źródłowymi oraz konfigurować ustawienia kompilacji. Dzięki intuicyjnemu interfejsowi, Code::Blocks jest idealnym narzędziem dla początkujących programistów, którzy chcą szybko rozpocząć pracę z C++.'
      },
      io: {
        title: 'Operacje Wejścia/Wyjścia',
        content: `int liczba;
cout << "Podaj liczbę: ";
cin >> liczba;
cout << "Wprowadzona liczba: " << liczba << endl;`,
        explanation: 'Operacje wejścia/wyjścia (I/O) w C++ są kluczowe dla interakcji programu z użytkownikiem. cin jest obiektem używanym do wczytywania danych z klawiatury, a cout do wyświetlania danych na ekranie. Wartości wczytane przez cin są przypisywane do zmiennych, co pozwala na dalsze przetwarzanie. Warto pamiętać, że cin może napotkać problemy z wczytywaniem danych, jeśli użytkownik wprowadzi nieprawidłowy typ, co może prowadzić do błędów w programie.'
      },
      zmienne: {
        title: 'Zmienne i Podstawowe Typy Danych',
        content: `int liczba = 42;         // liczba całkowita
double pi = 3.14159;    // liczba zmiennoprzecinkowa
char znak = 'A';        // pojedynczy znak
string tekst = "C++";   // tekst
bool flaga = true;      // wartość logiczna`,
        explanation: 'W C++ zmienne są używane do przechowywania danych, które mogą być modyfikowane w trakcie działania programu. Każda zmienna ma określony typ, który definiuje, jakie wartości może przechowywać oraz jakie operacje można na niej wykonywać. Typy podstawowe, takie jak int, double, char, string i bool, są fundamentem programowania w C++. Zrozumienie typów danych jest kluczowe dla efektywnego zarządzania pamięcią i optymalizacji kodu.'
      },
      operatory: {
        title: 'Operatory Matematyczne',
        content: `int a = 10, b = 3;
int suma = a + b;      // dodawanie
int roznica = a - b;   // odejmowanie
int iloczyn = a * b;   // mnożenie
int iloraz = a / b;    // dzielenie całkowite
int modulo = a % b;    // reszta z dzielenia`,
        explanation: 'Operatory matematyczne w C++ umożliwiają wykonywanie podstawowych operacji arytmetycznych, takich jak dodawanie, odejmowanie, mnożenie, dzielenie i obliczanie reszty z dzielenia. Oprócz operatorów podstawowych, C++ oferuje również operatory inkrementacji (++) i dekrementacji (--), które są używane do zwiększania lub zmniejszania wartości zmiennej o 1. Zrozumienie operatorów jest kluczowe dla tworzenia bardziej złożonych wyrażeń i algorytmów.'
      },
      wyrazenia: {
        title: 'Sposoby Zapisu Wyrażeń Matematycznych',
        content: `double wynik;
// Kolejność działań
wynik = 2 + 3 * 4;        // = 14
wynik = (2 + 3) * 4;      // = 20

// Funkcje matematyczne
#include <cmath>
wynik = pow(2, 3);        // potęgowanie: 2^3 = 8
wynik = sqrt(16);         // pierwiastek kwadratowy = 4
wynik = abs(-5);          // wartość bezwzględna = 5`,
        explanation: 'Operatory matematyczne w C++ umożliwiają wykonywanie podstawowych operacji arytmetycznych, takich jak dodawanie, odejmowanie, mnożenie, dzielenie i obliczanie reszty z dzielenia. Oprócz operatorów podstawowych, C++ oferuje również operatory inkrementacji (++) i dekrementacji (--), które są używane do zwiększania lub zmniejszania wartości zmiennej o 1. Zrozumienie operatorów jest kluczowe dla tworzenia bardziej złożonych wyrażeń i algorytmów.'
      },
      porownania: {
        title: 'Operatory Porównania',
        content: `int x = 5, y = 10;
bool wynik;

wynik = x == y;    // równe
wynik = x != y;    // różne
wynik = x < y;     // mniejsze
wynik = x > y;     // większe
wynik = x <= y;    // mniejsze lub równe
wynik = x >= y;    // większe lub równe`,
        explanation: 'Operatory porównania w C++ służą do porównywania dwóch wartości i zwracają wynik w postaci wartości logicznej (true lub false). Używając operatorów takich jak == (równe), != (różne), < (mniejsze), > (większe), <= (mniejsze lub równe) oraz >= (większe lub równe), programista może podejmować decyzje na podstawie wyników tych porównań. Operatory te są kluczowe w kontekście instrukcji warunkowych, ponieważ pozwalają na kontrolowanie przepływu programu w zależności od spełnienia określonych warunków. Na przykład, porównania mogą być używane do sprawdzania, czy użytkownik ma odpowiedni wiek do wykonania pewnych działań, czy też do sortowania danych.'
      },
      warunkowe: {
        title: 'Instrukcje Warunkowe Proste i Zagnieżdżone',
        content: `// Prosta instrukcja warunkowa
if (wiek >= 18) {
    cout << "Jesteś pełnoletni";
} else {
    cout << "Jesteś niepełnoletni";
}

// Zagnieżdżone instrukcje warunkowe
if (temperatura > 30) {
    if (wilgotnosc > 70) {
        cout << "Gorąco i parno";
    } else {
        cout << "Gorąco i sucho";
    }
} else {
    cout << "Umiarkowana temperatura";
}`,
        explanation: 'Instrukcje warunkowe w C++ pozwalają na wykonywanie różnych bloków kodu w zależności od spełnienia określonych warunków. Podstawową konstrukcją jest instrukcja if, która sprawdza, czy dany warunek jest prawdziwy. Jeśli tak, wykonuje przypisany blok kodu; w przeciwnym razie, można użyć else, aby zdefiniować alternatywną ścieżkę. Zagnieżdżone instrukcje warunkowe pozwalają na bardziej złożone decyzje, gdzie jeden warunek jest sprawdzany w kontekście innego. Dzięki tym konstrukcjom programy mogą reagować na różne sytuacje i wprowadzać logikę decyzyjną, co jest kluczowe w programowaniu.'
      },
      switch_case: {
        title: 'Instrukcja Wyboru Wielokrotnego',
        content: `int dzien = 3;
switch (dzien) {
    case 1:
        cout << "Poniedziałek";
        break;
    case 2:
        cout << "Wtorek";
        break;
    case 3:
        cout << "Środa";
        break;
    default:
        cout << "Inny dzień";
}`,
        explanation: 'Instrukcja switch w C++ jest używana do wyboru jednej z wielu możliwych ścieżek wykonania programu na podstawie wartości wyrażenia. Jest to alternatywa dla złożonych instrukcji if, gdy mamy do czynienia z wieloma warunkami opartymi na tej samej zmiennej. Każdy przypadek (case) odpowiada konkretnej wartości, a break kończy wykonanie bloku switch, zapobiegając "przechodzeniu" do kolejnych przypadków. Instrukcja default działa jak domyślna opcja, gdy żaden z przypadków nie pasuje. Użycie switch może poprawić czytelność kodu, zwłaszcza w sytuacjach, gdy mamy wiele warunków do sprawdzenia.'
      },
      petle: {
        title: 'Instrukcje Iteracyjne Proste i Zagnieżdżone',
        content: `// Pętla for
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}

// Pętla while
int j = 0;
while (j < 5) {
    cout << j << " ";
    j++;
}

// Zagnieżdżone pętle
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        cout << i << "," << j << " ";
    }
    cout << endl;
}`,
        explanation: 'Pętle w C++ umożliwiają wielokrotne wykonywanie bloku kodu, co jest niezwykle przydatne w przypadku operacji, które muszą być powtarzane, takich jak przetwarzanie elementów tablicy. Istnieją różne typy pętli, w tym for, while i do-while. Pętla for jest często używana, gdy znamy liczbę iteracji, podczas gdy while jest bardziej elastyczna i działa, dopóki warunek jest spełniony. Pętle mogą być zagnieżdżane, co pozwala na tworzenie bardziej złożonych struktur, takich jak przetwarzanie macierzy. Zrozumienie pętli jest kluczowe dla efektywnego programowania, ponieważ pozwala na automatyzację powtarzalnych zadań.'
      },
//       random: {
//         title: 'Liczby Pseudolosowe',
//         content: `#include <cstdlib>
// #include <ctime>
//
// // Inicjalizacja generatora
// srand(time(0));
//
// // Generowanie liczb losowych
// int losowa = rand() % 100;     // 0-99
// int zakres = rand() % 50 + 1;  // 1-50
//
// // Przykład: losowa liczba z zakresu
// int min = 10, max = 20;
// int w_zakresie = rand() % (max - min + 1) + min;`,
//         explanation: 'Generowanie liczb pseudolosowych w C++ jest realizowane za pomocą funkcji rand(), która zwraca losową liczbę całkowitą. Aby uzyskać różne wyniki przy każdym uruchomieniu programu, należy zainicjować generator liczb losowych za pomocą srand(time(0)), co ustawia ziarno na podstawie aktualnego czasu. Dzięki temu, każda sesja generowania liczb losowych będzie miała inny zestaw wyników. Pseudolosowość jest przydatna w wielu zastosowaniach, takich jak gry, symulacje czy algorytmy, które wymagają losowych danych. Ważne jest jednak, aby pamiętać, że rand() generuje liczby pseudolosowe, co oznacza, że nie są one całkowicie losowe, a ich sekwencja jest deterministyczna.'
//       },
//       tablice_1d: {
//         title: 'Tablice Jednowymiarowe',
//         content: `// Deklaracja i inicjalizacja
// int tablica[5] = {1, 2, 3, 4, 5};
//
// // Dostęp do elementów
// tablica[0] = 10;  // Pierwszy element
// tablica[4] = 50;  // Ostatni element
//
// // Przetwarzanie tablicy
// for (int i = 0; i < 5; i++) {
//     cout << tablica[i] << " ";
// }`,
//         explanation: 'Tablice jednowymiarowe w C++ to struktury danych, które przechowują elementy tego samego typu w jednym wymiarze. Umożliwiają one łatwe przechowywanie i dostęp do zbioru danych, co jest szczególnie przydatne w przypadku, gdy liczba elementów jest znana z góry. Elementy tablicy są indeksowane, co oznacza, że każdy element ma przypisany numer (indeks), zaczynający się od zera. Dzięki temu można łatwo uzyskać dostęp do konkretnego elementu, modyfikować go lub przetwarzać całą tablicę w pętli. Tablice jednowymiarowe są podstawowym budulcem bardziej złożonych struktur danych, takich jak tablice wielowymiarowe.'
//       },
//       tablice_2d: {
//         title: 'Tablice Dwuwymiarowe',
//         content: `// Deklaracja i inicjalizacja
// int tablica[3][3] = {
//     {1, 2, 3},
//     {4, 5, 6},
//     {7, 8, 9}
// };
//
// // Dostęp do elementów
// tablica[0][0] = 10;  // Pierwszy element
// tablica[2][2] = 90;  // Ostatni element
//
// // Przetwarzanie tablicy
// for (int i = 0; i < 3; i++) {
//     for (int j = 0; j < 3; j++) {
//         cout << tablica[i][j] << " ";
//     }
//     cout << endl;
// }`,
//         explanation: 'Tablice dwuwymiarowe w C++ to struktury danych, które przechowują elementy w układzie wierszy i kolumn. Można je traktować jako macierze, co czyni je idealnymi do reprezentacji danych w formie tabelarycznej, takich jak obrazy, tabele czy siatki. Elementy tablicy dwuwymiarowej są również indeksowane, ale wymagają dwóch indeksów: jednego dla wiersza i drugiego dla kolumny. Dzięki temu można łatwo uzyskać dostęp do konkretnego elementu oraz przetwarzać dane w złożony sposób, na przykład w pętlach zagnieżdżonych. Tablice dwuwymiarowe są często wykorzystywane w algorytmach, które wymagają przetwarzania danych w formie macierzy.'
//       },
//       string_ops: {
//         title: 'Tekstowy Typ Danych i Operacje na Zmiennych Tekstowych',
//         content: `#include <string>
//
// string tekst = "Hello";
// string tekst2 = " World";
//
// // Podstawowe operacje
// string polaczony = tekst + tekst2;  // Łączenie
// int dlugosc = tekst.length();       // Długość
// char znak = tekst[0];               // Dostęp do znaku
//
// // Metody string
// tekst.substr(0, 3);                 // Podciąg
// tekst.find("ll");                   // Szukanie
// tekst.replace(0, 1, "h");          // Zamiana`,
//         explanation: 'Typ danych string w C++ jest używany do przechowywania tekstu i oferuje wiele metod do manipulacji danymi tekstowymi. Operacje na zmiennych tekstowych obejmują łączenie (+), obliczanie długości (length()), dostęp do poszczególnych znaków oraz różne metody do przetwarzania tekstu, takie jak substr() (podciąg), find() (szukanie) i replace() (zamiana). Dzięki tym funkcjom programiści mogą łatwo manipulować danymi tekstowymi, co jest niezbędne w wielu aplikacjach, takich jak przetwarzanie danych wejściowych od użytkownika, analiza tekstu czy generowanie dynamicznych komunikatów.'
//       },
//       funkcje: {
//         title: 'Funkcje',
//         content: `// Deklaracja funkcji
// int dodaj(int a, int b) {
//     return a + b;
// }
//
// // Funkcja void (bez zwracanej wartości)
// void wyswietl(string tekst) {
//     cout << tekst << endl;
// }
//
// // Funkcja z parametrami domyślnymi
// void powitaj(string imie = "Gość") {
//     cout << "Witaj " << imie << endl;
// }
//
// // Przeciążanie funkcji
// double dodaj(double a, double b) {
//     return a + b;
// }`,
//         explanation: 'Funkcje w C++ to bloki kodu, które można wielokrotnie wykorzystywać, co pozwala na organizację kodu i zwiększenie jego czytelności. Funkcje mogą przyjmować parametry, co umożliwia przekazywanie danych do nich, oraz zwracać wartości, co pozwala na uzyskiwanie wyników obliczeń. C++ wspiera również funkcje void, które nie zwracają wartości, oraz przeciążanie funkcji, co pozwala na definiowanie wielu funkcji o tej samej nazwie, ale z różnymi typami lub liczbami parametrów. Dzięki funkcjom programiści mogą tworzyć modularny kod, co ułatwia jego utrzymanie i rozwój.'
//       }
//     },
  },
      algorytmika: {
      warunki: {
        title: 'Algorytmy z Warunkami',
        content: `if (liczba > 0) {
    cout << "Liczba dodatnia";
} else if (liczba < 0) {
    cout << "Liczba ujemna";
} else {
    cout << "Zero";
}`,
        explanation: 'Algorytmy z warunkami pozwalają na podejmowanie decyzji w programie w zależności od spełnienia określonych warunków. Umożliwiają one kontrolowanie przepływu programu, co jest kluczowe w tworzeniu logiki aplikacji. W przedstawionym przykładzie, program sprawdza wartość zmiennej liczba i na tej podstawie wyświetla odpowiedni komunikat. Dzięki temu można reagować na różne sytuacje, co czyni program bardziej interaktywnym i dostosowanym do danych wejściowych.'
      },
      warunki_zlozone: {
        title: 'Algorytmy z Warunkami Prostymi i Zagnieżdżonymi',
        content: `// Warunki złożone
if (wiek >= 18 && prawoJazdy) {
    if (doswiadczenie > 2) {
        cout << "Możesz wynająć samochód premium";
    } else {
        cout << "Możesz wynająć podstawowy samochód";
    }
} else {
    cout << "Nie możesz wynająć samochodu";
}`,
        explanation: 'Złożone warunki pozwalają na tworzenie bardziej zaawansowanych algorytmów decyzyjnych. W tym przypadku, program nie tylko sprawdza, czy użytkownik ma prawo jazdy i czy jest pełnoletni, ale także uwzględnia jego doświadczenie w prowadzeniu pojazdów. Dzięki zagnieżdżonym warunkom, możliwe jest tworzenie bardziej szczegółowych reguł, co pozwala na lepsze dostosowanie logiki do wymagań aplikacji.'
      },
    },
//       iteracyjne: {
//         title: 'Algorytmy Iteracyjne Proste i Zagnieżdżone',
//         content: `// Sumowanie elementów tablicy
// int suma = 0;
// for (int i = 0; i < n; i++) {
//     suma += tablica[i];
// }
//
// // Zagnieżdżone iteracje - macierz
// for (int i = 0; i < n; i++) {
//     for (int j = 0; j < m; j++) {
//         macierz[i][j] = i * j;
//     }
// }`,
//         explanation: 'Algorytmy iteracyjne wykorzystują pętle do przetwarzania danych w sposób powtarzalny. W przykładzie przedstawiono zarówno prostą iterację do sumowania elementów tablicy, jak i zagnieżdżoną iterację do wypełniania macierzy. Pętle są niezwykle przydatne w programowaniu, ponieważ pozwalają na automatyzację powtarzalnych zadań, co zwiększa efektywność i zmniejsza ryzyko błędów.'
//       },
//       tekstowe: {
//         title: 'Algorytmy na Tekstach',
//         content: `// Odwracanie tekstu
// string odwroc(string tekst) {
//     string wynik = "";
//     for (int i = tekst.length() - 1; i >= 0; i--) {
//         wynik += tekst[i];
//     }
//     return wynik;
// }
//
// // Sprawdzanie palindromu
// bool czyPalindrom(string tekst) {
//     int lewy = 0;
//     int prawy = tekst.length() - 1;
//     while (lewy < prawy) {
//         if (tekst[lewy] != tekst[prawy]) return false;
//         lewy++;
//         prawy--;
//     }
//     return true;
// }`,
//         explanation: 'Algorytmy tekstowe służą do przetwarzania i analizy ciągów znaków. W przedstawionych przykładach pokazano, jak można odwrócić tekst oraz sprawdzić, czy dany ciąg jest palindromem. Te operacje są fundamentalne w wielu aplikacjach, takich jak edytory tekstu, systemy wyszukiwania czy aplikacje do analizy danych, gdzie manipulacja tekstem jest kluczowa.'
//       },
//       trojkat: {
//         title: 'Algorytm Sprawdzania Warunku Istnienia Trójkąta',
//         content: `bool czyTrojkat(int a, int b, int c) {
//     return (a + b > c && b + c > a && a + c > b);
// }`,
//         explanation: 'Trójkąt istnieje, gdy suma długości dowolnych dwóch boków jest większa od długości trzeciego boku. Algorytm ten jest prostym, ale istotnym narzędziem w geometrii, które pozwala na weryfikację, czy dane długości mogą tworzyć trójkąt. Jest to przykład zastosowania warunków w praktyce, gdzie logika matematyczna jest implementowana w kodzie.'
//       }
//     },
    algorytmy_szczegolne: {
//       minmax: {
//         title: 'Znajdowanie Największego i Najmniejszego Elementu w Zbiorze',
//         content: `void znajdzMinMax(int tab[], int n, int &min, int &max) {
//     min = max = tab[0];
//     for (int i = 1; i < n; i++) {
//         if (tab[i] < min) min = tab[i];
//         if (tab[i] > max) max = tab[i];
//     }
// }`,
//         explanation: 'Algorytm przegląda wszystkie elementy zbioru, aktualizując wartości minimalne i maksymalne. Jest to podstawowa operacja w analizie danych, która pozwala na szybkie określenie zakresu wartości w zbiorze. Tego typu algorytmy są często wykorzystywane w różnych dziedzinach, od statystyki po przetwarzanie sygnałów.'
//       },
//       silnia: {
//         title: 'Algorytm Obliczania Silni',
//         content: `// Iteracyjnie
// int silnia(int n) {
//     int wynik = 1;
//     for (int i = 2; i <= n; i++) {
//         wynik *= i;
//     }
//     return wynik;
// }
//
// // Rekurencyjnie
// int silniaRek(int n) {
//     if (n <= 1) return 1;
//     return n * silniaRek(n - 1);
// }`,
//         explanation: 'Silnia to iloczyn wszystkich liczb naturalnych od 1 do n. Można ją obliczać iteracyjnie lub rekurencyjnie. Obliczanie silni jest klasycznym przykładem problemu, który ilustruje różne podejścia do rozwiązywania zadań w programowaniu, a także wprowadza pojęcia rekurencji i iteracji.'
//       }
//       potega: {
//         title: 'Algorytm Obliczania Potęgi',
//         content: `// Szybkie potęgowanie
// int potega(int podstawa, int wykladnik) {
//     int wynik = 1;
//     while (wykladnik > 0) {
//         if (wykladnik % 2 == 1)
//             wynik *= podstawa;
//         podstawa *= podstawa;
//         wykladnik /= 2;
//     }
//     return wynik;
// }`,
//         explanation: 'Algorytm szybkiego potęgowania pozwala efektywnie obliczać potęgi liczb. Dzięki zastosowaniu techniki dziel i zwyciężaj, algorytm ten znacząco redukuje liczbę operacji mnożenia, co czyni go bardziej wydajnym w porównaniu do prostego podejścia. Jest to przykład zastosowania algorytmów optymalizacyjnych w praktyce.'
//       },
//       euklides: {
//         title: 'Algorytm Euklidesa',
//         content: `// Iteracyjnie
// int nwd(int a, int b) {
//     while (b != 0) {
//         int temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
//
// // Rekurencyjnie
// int nwdRek(int a, int b) {
//     if (b == 0) return a;
//     return nwdRek(b, a % b);
// }`,
//         explanation: 'Algorytm Euklidesa służy do znajdowania największego wspólnego dzielnika dwóch liczb. Jest to jeden z najstarszych znanych algorytmów, który jest niezwykle efektywny i prosty w implementacji. Dzięki swojej rekurencyjnej i iteracyjnej wersji, algorytm Euklidesa jest szeroko stosowany w matematyce i informatyce, zwłaszcza w kontekście teorii liczb oraz w zadaniach związanych z redukcją ułamków.'
//       },
//       sortowanie: {
//         title: 'Sortowanie Bąbelkowe',
//         content: `void sortowanieBabelkowe(int tab[], int n) {
//     for(int i = 0; i < n-1; i++) {
//         for(int j = 0; j < n-i-1; j++) {
//             if(tab[j] > tab[j+1]) {
//                 swap(tab[j], tab[j+1]);
//             }
//         }
//     }
// }`,
//         explanation: 'Sortowanie bąbelkowe to prosty algorytm sortowania, który wielokrotnie przechodzi przez listę, porównując sąsiednie elementy i zamieniając je miejscami, jeśli są w złej kolejności. Chociaż jest to jeden z najprostszych algorytmów sortowania, jego wydajność jest niska w porównaniu do bardziej zaawansowanych metod, takich jak sortowanie szybkie czy sortowanie przez scalanie. Mimo to, sortowanie bąbelkowe jest często używane w edukacji, aby wprowadzić podstawowe pojęcia związane z algorytmami i strukturami danych.'
//       },
//       sortowanie_wybor: {
//         title: 'Sortowanie przez Wybór',
//         content: `void sortowaniePrzezWybor(int tab[], int n) {
//     for (int i = 0; i < n-1; i++) {
//         int min_idx = i;
//         for (int j = i+1; j < n; j++) {
//             if (tab[j] < tab[min_idx])
//                 min_idx = j;
//         }
//         swap(tab[min_idx], tab[i]);
//     }
// }`,
//         explanation: 'Sortowanie przez wybór znajduje najmniejszy element i umieszcza go na początku, następnie powtarza proces dla pozostałej części tablicy. Algorytm ten jest prosty do zrozumienia i implementacji, ale podobnie jak sortowanie bąbelkowe, ma niską efektywność w przypadku dużych zbiorów danych. Mimo to, jest to dobry przykład algorytmu, który ilustruje podstawowe zasady sortowania i manipulacji danymi.'
//       },
//       sortowanie_wstawianie: {
//         title: 'Sortowanie przez Wstawianie',
//         content: `void sortowaniePrzezWstawianie(int tab[], int n) {
//     for (int i = 1; i < n; i++) {
//         int klucz = tab[i];
//         int j = i - 1;
//         while (j >= 0 && tab[j] > klucz) {
//             tab[j + 1] = tab[j];
//             j = j - 1;
//         }
//         tab[j + 1] = klucz;
//     }
// }`,
//         explanation: 'Sortowanie przez wstawianie buduje posortowaną tablicę element po elemencie, wstawiając każdy kolejny element w odpowiednie miejsce. Jest to bardziej efektywny algorytm w porównaniu do sortowania bąbelkowego i przez wybór, zwłaszcza dla małych zbiorów danych lub danych, które są już częściowo posortowane. Algorytm ten jest często stosowany w praktycznych zastosowaniach, takich jak sortowanie danych w bazach danych czy w aplikacjach, gdzie wydajność jest kluczowa.'
//       },
//       cezar: {
//         title: 'Szyfr Cezara',
//         content: `string szyfrCezara(string tekst, int przesuniecie) {
//     string wynik = "";
//     for (char c : tekst) {
//         if (isalpha(c)) {
//             char podstawa = isupper(c) ? 'A' : 'a';
//             wynik += (c - podstawa + przesuniecie) % 26 + podstawa;
//         } else {
//             wynik += c;
//         }
//     }
//     return wynik;
// }`,
//         explanation: 'Szyfr Cezara to prosty szyfr podstawieniowy, który przesuwa każdą literę o stałą liczbę pozycji w alfabecie. Jest to jeden z najstarszych znanych algorytmów szyfrowania, który ilustruje podstawowe zasady kryptografii. Mimo swojej prostoty, szyfr Cezara jest łatwy do złamania, co czyni go bardziej interesującym z perspektywy edukacyjnej niż praktycznej. Uczy on podstawowych koncepcji związanych z bezpieczeństwem danych i szyfrowaniem.'
//       },
//       systemy: {
//         title: 'Zamiana Systemów Liczbowych',
//         content: `// Decimal to Binary
// string decToBin(int liczba) {
//     string wynik = "";
//     while (liczba > 0) {
//         wynik = to_string(liczba % 2) + wynik;
//         liczba /= 2;
//     }
//     return wynik;
// }
//
// // Binary to Decimal
// int binToDec(string binary) {
//     int wynik = 0;
//     int potega = 1;
//     for (int i = binary.length() - 1; i >= 0; i--) {
//         if (binary[i] == '1')
//             wynik += potega;
//         potega *= 2;
//     }
//     return wynik;
// }`,
//         explanation: 'Algorytmy konwersji między systemami liczbowymi pozwalają na zamianę liczb między różnymi systemami (np. dziesiętny, dwójkowy, szesnastkowy). W przedstawionych przykładach pokazano, jak można konwertować liczby z systemu dziesiętnego na binarny oraz odwrotnie. Te operacje są kluczowe w informatyce, ponieważ różne systemy liczbowe są używane w różnych kontekstach, takich jak programowanie, elektronika czy analiza danych. Zrozumienie tych konwersji jest fundamentalne dla każdego programisty.'
//       }
  }

    };

  // Calculate total sections and completed sections
  const totalSections = Object.values(sections).reduce(
    (acc, category) => acc + Object.keys(category).length,
    0
  );

  const completionPercentage = (completedSections.size / totalSections) * 100;

  const toggleSectionCompletion = (category: string, section: string) => {
    const sectionId = `${category}-${section}`;
    const newCompletedSections = new Set(completedSections);

    if (completedSections.has(sectionId)) {
      newCompletedSections.delete(sectionId);
    } else {
      newCompletedSections.add(sectionId);
    }

    setCompletedSections(newCompletedSections);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <Code2 className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Nauka C++</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Postęp Nauki */}
                <div className="lg:col-span-1">
                  <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-indigo-600" />
                      Postęp Nauki
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Postęp Kursu</span>
                          <span>{Math.round(completionPercentage)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${completionPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <BookCheck className="w-4 h-4 mr-2 text-green-500" />
                        <span>{completedSections.size}/{totalSections} Sekcji Ukończonych</span>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                Ścieżka Nauki
              </h2>
              <nav className="space-y-6">
                {Object.entries(categories).map(([catKey, category]) => (
                  <div key={catKey}>
                    <div className="flex items-center space-x-2 mb-2">
                      <category.icon className="w-4 h-4 text-indigo-600" />
                      <h3 className="font-medium text-gray-900">{category.title}</h3>
                    </div>
                    <div className="space-y-1 ml-6">
                      {Object.entries(sections[catKey]).map(([key, section]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setActiveCategory(catKey);
                            setActiveSection(key);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded-md flex items-center justify-between text-sm ${
                            activeCategory === catKey && activeSection === key
                              ? 'bg-indigo-50 text-indigo-700'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <ChevronRight className={`w-3 h-3 mr-1.5 ${
                              activeCategory === catKey && activeSection === key ? 'text-indigo-600' : 'text-gray-400'
                            }`} />
                            {section.title}
                          </div>
                          <CheckCircle2
                            className={`w-4 h-4 ml-2 ${
                              completedSections.has(`${catKey}-${key}`)
                                ? 'text-green-500'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>



          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {sections[activeCategory][activeSection].title}
                    </h2>
                    <button
                      onClick={() => toggleSectionCompletion(activeCategory, activeSection)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                        completedSections.has(`${activeCategory}-${activeSection}`)
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>
                        {completedSections.has(`${activeCategory}-${activeSection}`)
                          ? 'Ukończone'
                          : 'Oznacz jako ukończone'}
                      </span>
                    </button>
                  </div>
                  <div className="mb-6">
                    <div className="bg-gray-900 rounded-lg p-4 text-white font-mono">
                      <pre><code>{sections[activeCategory][activeSection].content}</code></pre>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-blue-700">{sections[activeCategory][activeSection].explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;