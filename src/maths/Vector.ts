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
  get normalize(): Vector {
    const mag = this.magnitude;
    return mag === 0 ? new Vector() : new Vector(this.x / mag, this.y / mag);
  }

  /**
   * Multiplication par un scalaire.
   *
   * @params {number} k - Nombre (scalaire) par lequel est
   * multiplier le vecteur.
   *
   * @returns {Vector} Nouveau vecteur égale à
   * `this.x * k, this.y * k`
   *
   * @example
   * const u = new Vector(2, 3);
   * const v = u.mult(3);
   * console.log(v); // Vector { x: 6, y: 9 }
   */
  mult(k: number): Vector {
    return new Vector(this.x * k, this.y * k);
  }

  /**
   * Division par un scalaire.
   *
   * @params {number} k - Scalaire par lequel on divise notre vecteur.
   * @returns {Vector} Vecteur égale à `this.x / k, this.y / k`
   *
   * @example
   * const v = new Vector(1, 2);
   * const u = v.divide(2);
   * console.log(u); // Vector { x: 0.5, y: 1 }
   */
  divide(k: number): Vector {
    return new Vector(this.x / k, this.y / k);
  }

  /**
   * Retourne l'angle (en radians) entre la direction allant de `this`
   * vers `v` et l'axe des abscisses (x).
   *
   * Autrement dit, on calacule l'angle du vecteur `(v - this)`.
   * Utile pour orienter un objet vers une cible.
   *
   * @param {Vector} v - le vecteur cible
   * @returns {number} angle en radians
   *
   * @example
   * const a = new Vector(1, 2);
   * const b = new Vector(3, 4);
   * const angle = a.angle(b);
   * console.log(angle); //
   */
  angle(v: Vector): number {
    return Math.atan2(v.y - this.y, v.x - this.x);
  }

  /**
   * Retourne un nouveau vecteur dont les composantes sont
   * les opposées de celles de ce vecteur.
   *
   * @returns {Vector} nouveau vecteur `{-this.x, -this.y}
   * @example
   * const v = new Vector(2, 3);
   * console.log(v.neg); // Vector { x: -2, y: -3 }
   */
  get neg(): Vector {
    return this.mult(-1);
  }

  /**
   * Retourne un nouveau vecteur dont les composantes sont
   * issues de la rotation de ce vecteur par un angle
   * (en radians) passé en paramètre.
   *
   * @param angle - angle de rotation
   * @returns {Vector} vecteur issue de la rotation.
   * @example
   *
   * const u = new Vector(1, 2);
   * const v = u.rotate(5);
   * console.log(v); // Vector { x: 2.2015, y: -0.3915 }
   */
  rotate(angle: number): Vector {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = this.x * cos - this.y * sin;
    const y = this.x * sin + this.y * cos;
    return new Vector(x, y);
  }

  /**
   * Retourne un vecteur dont on a fait tourné autour d'un
   * point spécifié d'un certains un angle.
   *
   * @param angle - angle de rotation
   * @param point - point autour du quel on fait la rotation
   * @returns {Vector} Vecteur après rotation
   *
   * @example
   * const u = new Vector(1, 2);
   * const v = u.rotateAbout(5);
   * console.log(v); // Vector { x: 1, y: 0 }
   */
  rotateAbout(angle: number, point: Vector): Vector {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = point.x + ((this.x - point.x) * cos - (this.y - point.y) * sin);
    const y = point.y + ((this.x - point.x) * sin - (this.y - point.y) * cos);
    return new Vector(x, y);
  }

  /**
   * Retourne un vecteur perpendiculaire à ce vecteur.
   * Utile pour determiner la normale à un vecteur.
   *
   * @param negate - Valeur booléen pour determiner si on
   * donne la perpendiculaire à 90 ou -90 dégré.
   *
   * @returns {Vector} nouveau vecteur perpendiculaire à
   * ce vecteur.
   *
   */
  perp(negate: boolean = false): Vector {
    const neg = negate === true ? -1 : 1;
    return new Vector(neg * -this.y, neg * this.x);
  }
}
