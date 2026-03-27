/**
 * Represente un vecteur 2D untilisé utilisé  dans le
 * moteur physique.
 *
 * Un vecteur est définis par ses deux composantes:
 * - x: composante horizontale
 * - y: composante verticale
 *
 * Cette class implémente les opérations de base de
 * base utilisées dans les calculs physiques (addition,
 * produit scalaire, noramlisation, etc.).
 */
class Vector {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Addition vectorielle: retourne un nouveau vecteur
   * égale à `this + v`.
   *
   * @param {Vector} v - le vecteur à ajouter.
   *
   * @example
   * const v = new Vector(1, 2)
   * const u = new Vector(3, 4)
   * const w = v.add(u)
   * console.log(w); // Vector { x: 4, y: 6 }
   */
  add(v: Vector): Vector {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  /**
   * Soustraction vectorielle:  retourne un nouveau
   * vecteur égal à `this - v`.
   *
   * @param {Vector} v - le vecteur à soustraire.
   *
   * @example
   * const v = new Vector(2, 3)
   * const u = new Vector(4, 5)
   * const w = v.subtract(u)
   * console.log(w); // Vector { x: -2, x: -2 }
   */
  sub(v: Vector): Vector {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  /**
   * Produit vectoriel 2D (cross product): retourne un scalaire
   * égale à `this.x * v.y - this.y * v.x`.
   *
   * Utile pour déterminer l'aire du parallélogramme formé par les
   * deux vecteurs ou pour tester l'orientation (sens trigonométrique).
   *
   * @param {Vector} v - Le vecteur avec lequel calculer le produit
   * vectoriel.
   *
   * @example
   * const a = new Vector(1, 2);
   * const b = new Vector(3, 4);
   * const c = a.crossProduct(b);
   * console.log(c); // -2
   */
  cross(v: Vector): number {
    return this.x * v.y - this.y * v.x;
  }

  /**
   * Produit scalaire 2D (dot product): retourne un scalaire égale
   * à `this.x * v.x + this.y * v.y`.
   *
   * @param {Vector} v - Vecteur avec lequel calculer le produit
   * scalaire.
   *
   * @example
   * const u = new Vector(1, 2);
   * const v = new Vector(3, 4);
   * const w = u.dotProduct(v);
   * console.log(w); // 11
   */
  dot(v: Vector): number {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * Longeur (magnitude) du vecteur 2D.
   *
   * @example
   * const v = new Vector(3, 4);
   * console.log(v.magitude); // 5
   */
  get magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Longeur du vecteur au carré.
   * Utile pour éviter le coût de calcul de `Math.sqrt` lorsque
   * seule la comparaison des longeurs est nécessaire.
   *
   * @example
   * const v = new Vector(1, 3);
   * console.log(v.magnitudeSquared) // 10
   */
  get magnitudeSquared(): number {
    return this.x * this.x + this.y * this.y;
  }

  /**
   * Retourne une version normalisée du vecteur.
   *
   * @example
   * const v = new Vector(1, 2)
   * const u = v.normalise
   * console.log(u); // Vector { x: 0.447, y: 0.894 }
   */
  get normalise(): Vector {
    const mag = this.magnitude;
    return mag === 0 ? new Vector() : new Vector(this.x / mag, this.y / mag);
  }
}
